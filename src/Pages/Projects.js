import React, { useEffect, useState } from 'react';
import project1 from '../images/project1.png'
import project2 from '../images/projects2.png'
import project3 from '../images/projects3.png'
import Project from './Project';
import './Styles.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='projectBody pb-20'>
            <div className='text-center text-white  py-16'>
                <h1 className=' lg:text-5xl text-4xl mb-2 font3'>Latest Projects</h1>
                <progress class="progress w-48 lg:w-80 "></progress>
            </div>
            <div className=' lg:max-screen grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-8 px-4'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
                {/* <div class="border-l-8 border-pink-700 card rounded lg:max-screen bg-slate-900 shadow-xl">
                    <figure class="lg:px-6 lg:pt-6">
                        <img src={project1} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-orange-700 text-3xl font1">Paint Pro</h2>
                        <p>Paint pro is a manufacturer website. Worked to order the tools by maintaining a range of quantities.</p>
                        <div class="card-actions">
                            <a href="https://paint-pro-99a0a.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-outline text-white px-8 hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-l-8 border-pink-700 card lg:max-screen bg-slate-900 rounded shadow-xl">
                    <figure class="lg:px-6 lg:pt-6">
                        <img src={project2} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-orange-700 text-3xl font1">Laptop Mart</h2>
                        <p>Laptop mart is a warehouse management website.Handled restocked and delivered product quantity.</p>
                        <div class="card-actions">
                            <a href="https://laptop-mart.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-outline text-white px-8 hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-l-8 border-pink-700 card lg:max-screen bg-slate-900 rounded shadow-xl">
                    <figure class="lg:px-6 lg:pt-6">
                        <img src={project3} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-orange-700 text-3xl font1">Gym-Trainer</h2>
                        <p>Gym Trainer is an Independent service provider website. Provide different kind of services.</p>
                        <div class="card-actions">
                            <a href="https://gym-trainer-d8b35.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-outline text-white px-8 hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;