import React from 'react';
import { useState } from 'react';
import './styles/Card.css';

export const Card = () => {
    const [file, setFile] = useState("");
    const handleJSON = (event) => {
        if(!event.target.files[0]){
            alert('Select file to proceed!');
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setFile(e.target.result);
        };
        alert("selected");
    }
    return (
        <div className="card">
            <h1 className='title'>Upload JSON</h1>
            <div>
                <input type="file" id="actual-btn" onChange={handleJSON} required accept="application/json" />
                <label htmlFor="actual-btn">Choose File</label>
            </div>
        </div>
    );
}