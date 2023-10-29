import React, {useState} from "react";


function State(){

    const [answer, setAnswer] = useState(true);

    function change(){
        setAnswer (!answer)
    }




    return (

        <div className="container">
            <div className="question">Is the planet flat?</div>
            <div className="answer" onClick={change}>
                <h1>{answer ? "YES" : "NO"}</h1>
            </div>
        </div>

    )
}

export default State