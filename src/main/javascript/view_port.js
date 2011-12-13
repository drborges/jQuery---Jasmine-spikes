function ViewPort(x, y, width, height) {
	
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

ViewPort.prototype.hasPosition = function(x, y) {
	
	return x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height;
}

ViewPort.prototype.intersects = function(element) {
	var $element = $(element);
	var inspection = "top: " + $element.offset.top +
			"\nleft: " + $element.offset.left +
			"\nwidth: " + $element.width() +
			"\nheight: " + $element.height();
	
	alert(inspection);
	
	// Checks for all conditions where the view port doesn't intersects
	// the given element and then negates the result.
	return !(this.x > $element.offset.left + $element.width() ||
			this.y > $element.offset.top + $element.height() ||
			$element.offset.left > this.x + this.width ||
			$element.offset.top > this.y + this.height);
}