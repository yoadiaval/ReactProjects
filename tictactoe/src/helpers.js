export function calculateWinner(squares){
    //variable con todas las combinaciones ganadoras
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    //Recorre cada arreglo en lines y rerifica esas posiciones dentro de square, si todas coinciden devuelve "0" o "x", si no son iguales devuelve null. 
    for(let i = 0; i<lines.length; i++){
        const [a,b,c]=lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}