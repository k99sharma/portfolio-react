import './Projects.css';
import { useState } from 'react';
import { techLinks } from '../utils/techLinks';

// projects list
const projects = [{
    id: 0,
    name: 'Pokedex',
    description: 'Pokedex application created using React library, tailwind CSS, and official pokemon API. It shows pokemon in form of cards with features including pokemon searching and filtering based on regions.',
    logo: '/project/pokemon.png',
    tech: ['react', 'tailwind'],
    links: {
        github: 'https://github.com/k99sharma/pokemon-react',
        hosted: 'https://ghost32-pokemon.netlify.app/',
    },
    bg: 'bg-yellow-400'
},
{
    id: 1,
    name: 'Bifrost',
    description: 'Bifrost is a web application to visualize and locate different countries on 3D globe model. Globe is created in Three.js library and country data is fetched from a REST API.',
    logo: '/project/bifrost.png',
    tech: ['threejs', 'html5', 'css3', 'bootstrap'],
    links: {
        github: 'https://github.com/k99sharma/bifrost',
        hosted: 'https://ghost32-bifrost.netlify.app/',
    },
    bg: 'bg-green-400'
},
{
    id: 2,
    name: 'Planet Visualizer',
    description: 'Planet Visualizer is a project created for Postman Visualization Hackathon. It uses the Postman Visualizer feature to visualize different planet information with an integrated 3D model. It fetches data from custom-built API.',
    logo: '/project/planet.png',
    tech: ['postman', 'html5', 'css3', 'javascript', 'threejs'],
    links: {
        github: 'https://github.com/k99sharma/planets-api',
        hosted: 'https://www.postman.com/winter-shuttle-180342/workspace/planet-visualizer/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation',
    },
    bg: 'bg-blue-400'
},
{
    id: 3,
    name: 'Mount Pizza',
    description: 'A Pizza Delivery application was created using the MERN stack. It has a user as well as an admin module.',
    logo: '/project/mountpizza.png',
    tech: ['react', 'javascript', 'expressjs', 'nodejs', 'mongodb'],
    links: {
        github: 'https://github.com/k99sharma/OIBSIP',
        hosted: 'https://mountpizza.netlify.app',
    },
    bg: 'bg-orange-400'
}];

// function detail component
function ProjectDetail(props) {
    const handleClose = () => {
        props.setProjectId(0);
        props.setShowProject(false);
    }

    return (
        <div className={`projectDetail flex justify-center items-center ${!props.show && 'hidden'}`}>
            <div className='projectDetail__container rounded-lg grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-8/12'>
                <div className={'projectDetail__container__illustration rounded-lg p-2 md:flex md:items-center md:justify-center ' + projects[props.id].bg}>
                    <div className='projectDetail__container__illustration__header md:hidden flex items-center justify-end hover:pointer-cursor'>
                        <img className='w-8 h-8' onClick={handleClose} src='/web/close.png' alt='close' />
                    </div>
                    <div className='projectDetail__container__illustration__img flex items-center justify-center md:my-8'>
                        <img className='w-20 h-20' src={projects[props.id].logo} alt={projects[props.id].name} />
                    </div>
                </div>

                <div className='projectDetail__container__detail p-2'>
                    <div className='projectDetail__container__detail__header md:items-center md:justify-end hidden md:flex md:mb-2 mx-3'>
                        <img className='w-8 h-8' onClick={handleClose} src='/web/close.png' alt='close' />
                    </div>

                    <div className='projectDetail__container__detail__title text-3xl p-3 text-amber-500'>
                        {
                            projects[props.id].name
                        }
                    </div>

                    <div className='projectDetail__container__detail__tech my-3 grid grid-cols-4'>
                        {
                            projects[props.id].tech.map(link => {
                                return <img className='w-20 h-6 mb-2' key={link} src={techLinks[link]} alt='tech' />
                            })
                        }
                    </div>

                    <div className='projectDetail__container__detail__description p-3'>
                        {
                            projects[props.id].description
                        }
                    </div>

                    <div className='projectDetail__container__detail__links flex py-2'>
                        <a className='h-8 w-8 mx-2' href={projects[props.id].links.github} target='_blank' rel="noreferrer">
                            <img src='/social/github.png' alt='github' />
                        </a>

                        <a className='h-8 w-8 mx-2' href={projects[props.id].links.hosted} target='_blank' rel="noreferrer">
                            <img src='/social/web.png' alt='hosted' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    const [showProject, setShowProject] = useState(false);
    const [projectId, setProjectId] = useState(0);

    const handleClick = (id) => {
        setShowProject(true);
        setProjectId(id);
    }

    return (
        <>
            <div className='projects py-20 px-6'>
                <div className='projects__title pb-6 text-4xl font-bold text-font text-center'>
                    My Recent Work
                </div>

                <div className='projects__subtitle pb-6 text-xl text-center font-light'>
                    Here are a few projects I've worked on recently.
                </div>

                <ProjectDetail show={showProject} id={projectId} setShowProject={setShowProject} setProjectId={setProjectId} />

                <div className='projects__list py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        projects.map(project => {
                            return <div onClick={() => handleClick(project.id)} key={project.id} className='mb-5'>
                                <div className='project flex m-3 h-60'>
                                    <div className={'project__thumbnail flex justify-center items-center grow rounded-xl border-black hover:shadow-2xl hover:cursor-pointer ' + project.bg}>
                                        <img className='w-24 h-24' src={project.logo} alt={project.name} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}


export default Projects;
