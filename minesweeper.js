/*
 * Runs minesweeper game on canvas.
 *
 * Parameters:
 * canvID is the id of the canvas element to draw the game on.
 */
function runMinesweeper(canvID, width) {
	alert("test");
	var canvas = document.getElementById(canvID);
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0.05 * width, 0.05 * width, 0.9 * width, 0.9 * width);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}
