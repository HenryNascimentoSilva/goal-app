import { useState } from "react";
import './NewGoal.css'

function NewGoal(props) {

    const [UserInput, setUserInput] = useState('');
    
    const addGoal = event => {event.preventDefault();


    const newGoal = {
        id: Math.random().toString(),
        text:UserInput
    }

    setUserInput('');

    // eslint-disable-next-line react/prop-types
    props.onAddGoal(newGoal);
    }

    const textChangehandler = event => {
        setUserInput(event.target.value);
    }


    return(
        <form className="new-goal" onSubmit={addGoal}>
            <input type="text"  value={UserInput} placeholder="Criar uma nova meta" onChange={textChangehandler}/>
            <button type="submit">Criar Meta</button>
        </form>
    );
}

export default NewGoal;