 
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

    useEffect(() => {
        console.log(`Se está cargando mi componente`);
    }, []);

    const CheckWinner = () => {
        // * TODO: Comprobar si alguien gana
		/**
     * 1 - Comprobar las filas
     * 2 - Comprobar las columnas
     * 3 - Comprobar las diagonales
     */
		 const CheckWinner = () => {
			let i = 0;
			let ctrl = true;
		  
			while (ctrl && i<matrix.length) {
			console.log(`i value: ${i}`)
			  // recorrer columnas => buscar NO coincidencias
			  let j = 1;
			  let ctrl2 = true;
			  while(ctrl2 && j<matrix[i].length) {
				if ((matrix[i][j] !== matrix[i][j-1]) || typeof matrix[i][j] === 'undefined') {
				 ctrl2 = false;
				}else{
				  j+=1;
				}
			  }
		  
			  ctrl = !ctrl2;
			  i+=1;
			  
			}
		  
			return !ctrl;
			
		  };

		 const CheckMayorDiagonal = () => {
			let i = 1;
			let ctrl = false;
	
			while(ctrl && i<table.length) {
				if (table[i][i] != table[i-1][i-1]){
					ctrl = true;
				}else{
					i += 1;
				}
			}
			return ctrl;
		}
	
		const CheckRows  = () => {
			// comprobar las filas
			let ctrl = false;
			let i = 0;
	
			while(ctrl && i<table.length) {
				
				// * Los valores de los elementos
				console.log(table[i]); // => FILA
				let ctrl2 = false;
				let j = 1;
	
				while(ctrl2 && j<table[i].length) {
	
					if(table[i][j-1] != table[i][j]) {
						ctrl2 = true;
					}else{
						j += 1;
					}
	
				}
	
				ctrl = ctrl2 ? true : false;
				if (!ctrl) {
					i+=1;
				}
	
			}
			return ctrl;
		}
	
		const CheckColumnns = () => {
	
		};
	
		const CheckWinner = () => {
			if (CheckRows() && CheckMayorDiagonal() && CheckColumnns()) {
				alert("Hay un ganador");
			}
		};
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
