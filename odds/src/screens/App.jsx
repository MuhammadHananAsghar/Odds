import React from 'react';
import { ParticlesCircle } from '../components/ParticlesCircle';
import { Card } from '../components/Card';
import { loadFull } from "tsparticles";
import './styles/App.css';

const App = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <div className="main">
            <h1 className='mainTitle'>odds</h1>
            <ParticlesCircle particlesInit={particlesInit} />
            <Card />
        </div>
    );
}

export default App;