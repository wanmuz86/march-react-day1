import react, { useState } from 'react';
import Counter from './Counter';
function Main() {

    const [name, setName] = useState("Wan");
    const [age, setAge] = useState(35);
    const [username, setUserName] = useState("");
    const [userage, setUserAge] = useState();
    const [todos, setTodos] = useState(["List", "Lifting up state", "Router"]);
    const [newtask, setNewTask] = useState("");

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
            <input type="text" placeholder="Add new Task" value={newtask} 
            onChange={
                (evt)=>{
                setNewTask(evt.target.value)
            }}/>
            <button onClick={()=>{
                setTodos([...todos,newtask]);
                setNewTask('');
            }}>Add in the list</button>
            <ul>
                {
                    todos.map(val => {
                        return <li key={val}>{val} <button onClick={()=>{
                            let filteredTodos = todos.filter(item=>{
                                return item !== val;
                            })
                            setTodos(filteredTodos);
                        }}>Remove</button></li>
                    })
                }
            </ul>
            <hr />
            <Counter />
        </main>
    );
}
export default Main;