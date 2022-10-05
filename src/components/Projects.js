import './Projects.css';
import { useState } from 'react';

// projects list
const projects = [{
    id: 0,
    name: 'Pokedex',
    description: 'Pokedex is a React application. It fetches pokemon from an Open Pokedox API and displays them in the form of a grid. Other features includes searching and filtering.',
    thumbnail: 'pokemon.png',
    gif: '/gif/pokemon.gif',
    logo: '/project/pokemon.png',
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
    thumbnail: 'bifrost.png',
    gif: '/gif/pokemon.gif',
    logo: '/project/bifrost.png',
    links: {
        github: 'https://github.com/k99sharma/bifrost',
        hosted: 'https://ghost32-bifrost.netlify.app/',
    },
    bg: 'bg-green-400'
},
{
    id: 2,
    name: 'Planet Visualizer',
    description: 'I am description',
    thumbnail: 'planet.png',
    gif: '/gif/pokemon.gif',
    logo: '/project/planet.png',
    links: {
        github: 'https://github.com/k99sharma/planets-api',
        hosted: 'https://www.postman.com/winter-shuttle-180342/workspace/planet-visualizer/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation',
    },
    bg: 'bg-blue-400'
},
{
    id: 3,
    name: 'Mount Pizza',
    description: 'Mount Pizza is a web application ',
    thumbnail: 'mountpizza.png',
    gif: '/gif/pokemon.gif',
    logo: '/project/mountpizza.png',
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
            <div className='projectDetail__container bg-white w-11/12 lg:w-8/12 p-3 rounded-md'>
                <div className='projectDetail__container__header flex items-center justify-between border-b-2 border-black pb-2 mb-2 px-2'>
                    <div className='projectDetail__container__title flex items-center'>
                        <div className='projectDetail__container__title_logo'>
                            <img className='w-6 h-6 mr-2' src={`/project/${projects[props.id].thumbnail}`} alt='icon' />
                        </div>
                        <div className='projectDetail__container__title_text text-xl'>
                            {
                                projects[props.id].name
                            }
                        </div>
                    </div>

                    <div onClick={handleClose} className="projectDetail__container__close hover:cursor-pointer">
                        <img className='w-8 h-8' src='/web/close.png' alt='close' />
                    </div>
                </div>


                <div className='projectDetail__container__description mb-2 px-2'>
                    {
                        projects[props.id].description
                    }
                </div>

                <div className='projectDetail__container__gif flex justify-center my-5'>
                    <img className='h-4/6 w-8/12' src={projects[props.id].gif} alt="gif" />
                </div>

                <div className="projectDetail__container__links flex justify-center items-center pt-2 border-t-2 border-black">
                    <a href={projects[props.id].links.github} target="_blank" rel="noreferrer">
                        <img className='h-6 w-6 mx-2' src='/social/github.png' alt='github' />
                    </a>

                    <a href={projects[props.id].links.hosted} target="_blank" rel="noreferrer">
                        <img className='h-6 w-6 mx-2' src='/social/web.png' alt='github' />
                    </a>
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
