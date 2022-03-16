import react, { useState } from 'react';
import Counter from './Counter';
import ListItem from './ListItem';
function Main() {

    const [name, setName] = useState("Wan");
    const [age, setAge] = useState(35);
    const [username, setUserName] = useState("");
    const [userage, setUserAge] = useState();
    const [todos, setTodos] = useState([]);
    const [newtask, setNewTask] = useState("");
    const [taskdate, setTaskDate] = useState("");
    const [taskimportance, setTaskImportance] = useState("");

    const buttonClick = () => {
        alert("Button is pressed!");
    }

    return (

        <main><h2>This is main page</h2>
            <p>This is main page please like or comments</p>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <button onClick={buttonClick}>Click me!</button>

            <hr />
            <input type="text"
                placeholder="Enter your name"
                value={username}
                onChange={
                    (evt) => {
                        setUserName(evt.target.value)
                    }
                }

            />

            <input type="number"
                placeholder="Enter your age"
                value={userage}
                onChange={
                    (evt) => {
                        setUserAge(evt.target.value);
                    }
                }
            />

            <button onClick={() => {
                alert(`Hello ${username}, you are ${userage} years old`);
            }}>
                Say Hello!</button>
            <hr />
            <h2>Things to learn!</h2>
            <input type="text" placeholder="Add task name" value={newtask} 
            onChange={
                (evt)=>{
                setNewTask(evt.target.value)
            }}/><br/>
            <input type="text" 
            value={taskimportance}
            onChange={
                (evt)=>{
                    setTaskImportance(evt.target.value);
                }
            }
            placeholder="Add task importance"/>
            <br/>
            <input type="date" 
            value={taskdate}
            onChange=
            {
                (evt)=>{
                setTaskDate(evt.target.value);
            }}
            placeholder="Add targeted date"/>
            <br/>
            <button onClick={()=>{
                let taskbaru = {
                    title:newtask,
                    date:taskdate,
                    importance:taskimportance
                }
                setTodos([...todos,taskbaru]);
                setNewTask('');
                setTaskDate('');
                setTaskImportance('');
            }}>Add in the list</button>
            <p><em>There are {todos.length} items in the list</em></p>
            {
                todos.length == 0 ?
                <p>Start adding your to do item now!</p>
                :
                <span></span>
            }
            
            <ul>
                {
                    todos.map(val => {
                        return <ListItem task={val} handleClick={(task)=>{
                            let filteredTodos = todos.filter(item=>{
                                return item.title !== task.title
                            })
                            setTodos(filteredTodos)

                        }} />
                        // return <li key={val}>{val} <button onClick={()=>{
                        //     let filteredTodos = todos.filter(item=>{
                        //         return item !== val;
                        //     })
                        //     setTodos(filteredTodos);
                        // }}>Remove</button></li>
                    })
                }
            </ul>
            <hr />
            <Counter />
        </main>
    );
}
export default Main;