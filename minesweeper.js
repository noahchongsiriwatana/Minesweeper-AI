/*
 * Runs minesweeper game on canvas.
 *
 * Parameters:
 * canvID is the id of the canvas element to draw the game on.
 * width is the width and height of the canvas in pixels.
 */
function runMinesweeper(canvID, width) {
	var canvas = document.getElementById(canvID);
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, width, width);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
	
	var sqNum = 10;
	var freq = 5;
	var sqLen = width / sqNum;
	for (i = 0; i < sqNum; ++i) {
		for (j = 0; j < sqNum; ++j) {
			pos = {
				x: i * sqLen,
				y: j * sqLen
			};
			drawSquare(ctx, pos, sqLen);
		}
	}
	var game = newGame(sqNum, freq);
	gameListen(canvas, game);
}

/*
 * Generates a random game represented by an array.
 *
 * Parameters:
 * size is the number of squares in each row and column.
 * mineRatio is the average number of squares with one mine.
 */
function newGame(size, mineRatio) {
	game = new Array(size);
	for (var i = 0; i < size; ++i) {
		game[i] = new Array(size);
		for (var j = 0; j < size; ++j) {
			Math.round(Math.random() * mineRatio) < 1 ? game[i][j] = 1 : game[i][j] = 0;
		}
	}
	return game;
}

/*
 * Draws a square.
 *
 * Parameters:
 * ctx is the canvas context to draw the square on.
 * pos is the relative position of the top right corner.
 * width is the width of the square.
 */
function drawSquare(ctx, pos, width) {
	ctx.beginPath();
	ctx.rect(pos.x, pos.y, width, width);
	ctx.stroke();
}

/*
 * Begins listening to user actions in a game.
 *
 * Parameters:
 * canvas is the canvas where the game is drawn.
 * game is the representative array for the game.
 */
function gameListen(canvas, game) {
	canvas.addEventListener(
		'click',
		function(e) {
			var loc = getLoc(canvas, game, e);
			alert(loc.x + ", " + loc.y);
		}
	);
}

/*
 * Finds the square in a game which is clicked on by the user.
 *
 * Parameters:
 * canvas is the canvas where the game is drawn.
 * game is the representative array for the game.
 * e is the click event.
 */
function getLoc(canvas, game, e) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: Math.floor((e.clientX - rect.left) / rect.width * game.length) + 1,
		y: Math.floor((e.clientY - rect.top) / rect.height * game.length) + 1
	};
}

