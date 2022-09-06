import React from 'react';
import { ParticlesCircle } from '../components/ParticlesCircle';
import { loadFull } from "tsparticles";
import './styles/App.css';

const App = () => {

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
        <div className="main">
            <ParticlesCircle particlesInit={particlesInit} />
        </div>
    );
}

export default App;