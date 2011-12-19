/**
 * Top level namespace for ContentExtractor Tool
 * 
 * @namespace
 */
var ContentExtractor = {};

/**
 * ViewPort Constructor
 * 
 * @param x position relative to the document
 * @param y position relative to the document
 * @param width of the viewport
 * @param height of the viewport
 */
ContentExtractor.ViewPort = function(x, y, width, height) {

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	var viewPortDiv = document.createElement("DIV");
	$(viewPortDiv).width(width).height(height).offset({ left: x, top: y });

	/**
	 * ViewPort extends HTMLDivElement
	 * TODO: this inheritance is not working as expected...
	 * The resulting element, does not held the hasPosition and intersects methods.
	 */
	ContentExtractor.ViewPort.prototype = viewPortDiv;
	ContentExtractor.ViewPort.prototype.constructor = ContentExtractor.ViewPort;
}

/**
 * Checks if the given position belongs to the viewport
 * 
 * @param x position relative to the document
 * @param y position relative to the document
 */
ContentExtractor.ViewPort.prototype.hasPosition = function(x, y) {
	
	return x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height;
}

/**
 * Checks if the viewport intersects the given HTML element
 * 
 * @param element that extends HTMLElement
 */
ContentExtractor.ViewPort.prototype.intersects = function(element) {
	// Checks for all conditions where the view port doesn't intersects
	// the given element and then negates the result.
	return !(this.x > element.offsetLeft + element.offsetWidth ||
			this.y > element.offsetTop + element.offsetHeight ||
			element.offsetLeft > this.x + this.width ||
			element.offsetTop > this.y + this.height);
}
