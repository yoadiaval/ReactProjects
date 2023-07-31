const style={
    backGround:"lightblue",
    border:"2px solid darkblue",
    height:"70px",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
}

function Square({value, onClick}){
    return<button style={style} onClick={onClick}>{value}</button>
}

export default Square;