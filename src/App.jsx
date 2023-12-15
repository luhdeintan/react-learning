import { useState } from 'react'

function Square({value, onSquareClick}) {
	return (
		<button className='square' onClick={onSquareClick}>
			{value}
		</button>
	)
}

function calculateWinner(squares) {
	const lines = [
		[0,1,2], [3,4,5], [6,7,8],
		[0,3,6], [1,4,7], [2,5,8],
		[0,4,8], [2,4,6]
	];
	
	for(let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
	
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	
	return false;
}

function Board({xIsNext, squares, onPlay}) {
	function handleClick(i) {
		// check if square have value: purpose to avoid value square change
		if(squares[i] || calculateWinner(squares)) return;

		const nextSquares = squares.slice();

		nextSquares[i] = xIsNext ? 'X' : 'O';

		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status = '';

	if(winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' +  (xIsNext ? 'X' : '0');
	}

	return (
		<>
			<div className='status'>{status}</div>
			<div className='board'>
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]); //save the history game
	const [currentMove, setCurrentMove] = useState(0);
	const currenSquares = history[currentMove]; //what the step now
	const xIsNext = currentMove % 2 === 0; // if true player X, if false player O

	function jumpTo(nextMove) { //contain index move
		setCurrentMove(nextMove);
	}

	function handlePlay(nextSquares) {
		// setHistory([...history, nextSquares]); //copy data history and append new step with who is playing and square on index i
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	// each squares with index called move
	const moves = history.map((squares, move) => {
		let description = '';
		if(move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className='game'>
			<div className='game-board'>
				<Board xIsNext={xIsNext} squares={currenSquares} onPlay={handlePlay} />
			</div>
			<div className='game-info'>
				<ol>
					{moves}
				</ol>
			</div>
		</div>
	);
}

