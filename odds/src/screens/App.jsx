import React, { useEffect } from 'react';
import { ParticlesCircle } from '../components/ParticlesCircle';
import { Card } from '../components/Card';
import { loadFull } from "tsparticles";
import './styles/App.css';

const App = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const handleAPI = () => {
        fetch(
            "https://muhammadhananasghar-odds-ppjxw96wx4r2654v-8000.githubpreview.dev/api/",{
                method: 'GET',
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            })
    }

    useEffect(()=>{
        handleAPI()
    }, []);

    return (
        <div className="main">
            <h1 className='mainTitle'>odds</h1>
            <ParticlesCircle particlesInit={particlesInit} />
            <Card />
        </div>
    );
}

export default App;