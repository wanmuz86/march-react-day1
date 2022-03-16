function ListItem(props) {
    return (
    <li>{props.task.title} - {props.task.date} - {props.task.importance} 
    <button onClick={()=>props.handleClick(props.task)}>Delete</button>
    </li>
    );
}

export default ListItem;