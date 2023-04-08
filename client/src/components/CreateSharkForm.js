import { useState } from 'react';

/**
 * this component renders a form for creaing a new Shark resource
 */
const CreateSharkForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3333/api/sharks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                alert(json.message);
            });
    }

    return (
        <div className='forms-container'>
            <div className="form-container">
                <input type="text" placeholder="Enter a sharks name..." value={name} onChange={(e) => setName(e.target.value)} />
                <button className="button" onClick={handleSubmit}>Create Shark</button>
            </div>
        </div>
    );
}

export default CreateSharkForm;