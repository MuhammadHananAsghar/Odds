import React from 'react';
import './styles/Card.css';

export const Card = () => {
    return (
        <div className="card">
            <h1 className='title'>Upload JSON</h1>
            <div>
                <input type="file" id="actual-btn" accept="application/json" />
                <label for="actual-btn">Choose File</label>
            </div>
        </div>
    );
}