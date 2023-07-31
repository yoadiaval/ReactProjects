import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3,1fr) /repeat(3,1fr)",
};

function Board({squares,onClick}) {

    const renderedSquares = squares.map((square,index)=>{
        return (
          <Square
          key={index}
            value={square}
            onClick={()=>onClick(index)}
          />
        );
    })
  return (
      <div style={style}>{renderedSquares}</div>
  );
}

export default Board;
