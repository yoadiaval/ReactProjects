import Card from "./Card";
import {data} from "../data"
function List(){
    const renderedData = data.map((item)=>{
        return <Card key={item.id} value={item}/>
    })
    return <>{renderedData}</>;
}

export default List 