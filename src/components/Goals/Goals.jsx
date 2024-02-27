/* eslint-disable react/prop-types */
import './Goals.css'

function Goals(props){
    return (
        <ul className="list">{
            props.goals.map((goals) => {
                return <li key={goals.id}>{goals.text}</li>;
            })
        }</ul>
    )
}

export default Goals;