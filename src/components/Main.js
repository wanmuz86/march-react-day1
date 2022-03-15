import react, {useState} from 'react';

function Main() {

    const [name,setName] = useState("Wan");
    const [age, setAge] = useState(35);

    const buttonClick = () => {
        alert("Button is pressed!");
    }

    return (

        <main><h2>This is main page</h2>
        <p>This is main page please like or comments</p>
        <p>My name is {name}</p>
        <p>I am {age} years old</p>
        <button onClick={ buttonClick}>Click me!</button>
        </main>
    );
}
export default Main;