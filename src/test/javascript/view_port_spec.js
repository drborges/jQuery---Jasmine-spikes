describe("ViewPort", function() {
	
	var viewPort;
	
	beforeEach(function() {
		viewPort = new ContentExtractor.ViewPort(5, 5, 100, 50);
	});

	describe("hasPosition method", function() {
		
		it("should has position (10px, 30px)", function() {
			
			expect(viewPort.hasPosition(10, 30)).toBeTruthy();
		});
		
		it("should not has position (2px, 2px)", function() {
			
			expect(viewPort.hasPosition(2, 2)).toBeFalsy();
		});
	});
	
	describe("A viewport at (5px, 5px, 100px, 50px)", function() {

		var div;
		
		beforeEach(function() {
			
			div = document.createElement('div');
			div.setAttribute("id", "selectedContent");
			
			document.body.appendChild(div);
		});
		
		afterEach(function() {
			$(div).remove();
		});
		
		it("should instersect div area (7px, 3px, 100px, 50px)", function() {

			$(div).width(100).height(20).offset({ top: 6, left: 3 });

			expect(viewPort.intersects(div)).toBeTruthy();
		});
		
		it("should instersect div area (20px, 0px, 10px, 200px)", function() {

			$(div).width(10).height(200).offset({ top: 0, left: 20 });

			expect(viewPort.intersects(div)).toBeTruthy();
		});
		
		it("should not intersect div area (7px, 3px, 100px, 50px)", function() {
			
			$(div).width(100).height(20).offset({ top: 120, left: 60 });

			expect(viewPort.intersects(div)).toBeFalsy();
		});

	});

	describe("A viewPort as a HTMLDivElement", function() {
		
		it("should has offset information", function() {

			expect(viewPort.offsetTop).toEqual(5);
			expect(viewPort.offsetLeft).toEqual(5);			
		});
	});
});
