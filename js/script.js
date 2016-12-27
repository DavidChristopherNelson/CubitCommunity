$(document).ready(
	// Places the circular buttons
	var $explodedPanel = document.getElementById('explodedPanel');
	var $relativeDiv = document.getElementById('relativeDiv');
	xPosition = [0.15,0.477,0.67,0.13,0.7];
	yPosition = [0.19,0.19,0.3,0.54,0.62];
	xTextPosition = [1,-1,0,0,-1,-1];
	yTextPosition = [0,0,-1,1,0,0];

	for (i = 0; i<xPosition.length; i++) {
		//Positions the text divs (which are transparent)
		var X = (xPosition[i]*($explodedPanel.width) + 90*xTextPosition[i] - 75)+ 'px';
		var Y = (yPosition[i]*($explodedPanel.height + 7) + 90*yTextPosition[i] - 75) + 'px';
		document.getElementById('text' + i).style.position = 'absolute';
		document.getElementById('text' + i).style.left = X;
		document.getElementById('text' + i).style.top = Y;

		//Creates and positions the button.
		var $newButton = $('<div>');
		$newButton.attr('class','circleButton');
		$newButton.attr('id',i);
		$($relativeDiv).append($newButton);
		var X = xPosition[i]*($explodedPanel.width) + 'px';
		var Y = yPosition[i]*($explodedPanel.height + 7) + 'px';
		document.getElementById(i).style.left = X;
		document.getElementById(i).style.top = Y;
		document.getElementById(i).style.borderColor = '#85EFB7';
	}
)

var revealDiv = function() {
	document.getElementById('text' + this.id).style.opacity = '0.8';
};

var hideDiv = function() {
	document.getElementById('text' + this.id).style.opacity = '0';
};

// Reveals and hides text in the Problems section.
var $classname = document.getElementsByClassName("circleButton");

for(var i=0;i<$classname.length;i++){
    $classname[i].addEventListener('mouseover', revealDiv, false);
    $classname[i].addEventListener('mouseleave', hideDiv, false);
}
