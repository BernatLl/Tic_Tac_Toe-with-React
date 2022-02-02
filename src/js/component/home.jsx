import React, { useState, useEffect } from "react";
import "./home.css";

//create your first component
const Home = () => {
	const [table, setTable] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
	]);
	const [turn, setTurn] = useState("x");

	const CheckColumn = () => {
		let j = 0;
		let ctrl = true;

		while (ctrl && j < table.length) {
			let i = 1;
			let ctrl2 = true;
			while (ctrl2 && i < table[j].length) {
				if (
					table[i][j] != table[i - 1][j] ||
					typeof table[i][j] == "undefined"
				) {
					ctrl2 = false;
				} else {
					i += 1;
				}
			}
			ctrl = !ctrl2;
			j += 1;
		}

		return !ctrl;
	};

	const CheckMayorDiagonal = () => {
		let i = 1;
		let j = 1;
		let ctrl = true;

		while (ctrl && i < table.length && j < table.length) {
			if (
				table[i][j] != table[i - 1][j - 1] ||
				typeof table[i][j] === "undefined"
			) {
				ctrl = false;
			} else {
				i += 1;
				j += 1;
			}
		}
		return ctrl;
	};
	const CheckSecondDiagonal = () => {
		let i = 1;
		let j = 1;
		let ctrl = true;

		while (ctrl && i < table.length && j < table.length) {
			if (
				table[i][j] != table[i - 1][j + 1] ||
				typeof table[i][j] === "undefined"
			) {
				crtl = false;
			} else {
				i += 1;
				j -= 1;
			}
		}
		return ctrl;
	};
	const CheckRows = () => {
		let i = 0;
		let ctrl = true;

		while (ctrl && j < table.length) {
			let j = 1;
			let ctrl2 = true;
			while (ctrl2 && j < table[i].length) {
				if (
					table[i][j] != table[i][j - 1] ||
					typeof table[i][j] == "undefined"
				) {
					ctrl2 = false;
				} else {
					j += 1;
				}
			}
			ctrl = !ctrl2;
			i += 1;
		}

		return !ctrl;
	};

	const CheckWinner = () => {
		if (
			CheckRows() ||
			CheckMayorDiagonal() ||
			CheckColumn() ||
			CheckSecondDiagonal()
		) {
			alert("Hay un ganador");
		}
	};

	const ChangeTurn = () => setTurn(turn === "x" ? "o" : "x");

	const SetValue = (i, j) => {
		if (typeof table[i][j] === "undefined") {
			const tmp = table;
			tmp[i][j] = turn;
			setTable(table);
			ChangeTurn();
			CheckWinner();
		} else {
			alert("Hey esta posicion ya estaba ocupada");
		}
	};

	return (
		<>
			<table>
				<tbody>
					{table.map((row, i) => (
						<tr key={i}>
							{row.map((column, j) => (
								<td onClick={() => SetValue(i, j)} key={j}>
									<div className="item">{column}</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Home;
