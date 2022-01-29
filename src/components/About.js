import './About.css';

function SkillSet(){
    return  <div className = 'skills grid grid-cols-1 md:grid-cols-2 text-center text-black rounded-xl drop-shadow'>
                <div className = 'skills__programming py-14 px-8 md:border-r-2  border-gray-200'>
                    <div className = 'mb-8 flex justify-center items-center'>
                        <img width = '100px' height = '100px' src = '/programming.png' alt = 'programming' />
                    </div>

                    <div className = 'skills__title text-font text-color my-6 text-xl font-bold'>
                        Programming
                    </div>

                    <div className = 'flex justify-center items-center'>
                        <p className = 'mb-8 text-lg font-thin w-9/12 lg:w-7/12'>
                            I like to write clean, elegant and optimized code.
                        </p>
                    </div>

                    <div className = 'text-lg text-font text-color-2 mt-6 mb-2'>
                        Languages I Use
                    </div>

                    <div className = 'mb-9 text-lg flex flex-col items-center'>
                        <p className = 'mb-1'>C, Java, Python</p>
                    </div>

                    <div className = 'text-lg text-font text-color-2 mt-6 mb-2'>
                        Coding Platform
                    </div>

                    <div className = 'mb-9 text-lg flex flex-col items-center'>
                        <div className = 'shadow-lg my-2'>
                            <a target = '_blank' rel="noreferrer" href = 'https://leetcode.com/ghost_32/'>
                                <img width = '150px' src = 'https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black' alt = 'leetcode' />
                            </a>
                        </div>

                        <div className = 'shadow-lg my-2'>
                            <a target = '_blank' rel="noreferrer" href = 'https://www.hackerrank.com/kalash_strt'>
                                <img width = '150px' src = 'https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white' alt = 'hackerrank' />
                            </a>
                        </div>

//                         <div className = 'shadow-lg my-2'>
//                             <a target = '_blank' rel="noreferrer" href = 'https://codeforces.com/profile/kalash_strt'>
//                                 <img width = '150px' src = 'https://img.shields.io/badge/Codeforces-445f9d?style=for-the-badge&logo=Codeforces&logoColor=white' alt = 'codeforces' />
//                             </a>
//                         </div>
                    </div>
                </div>
                    
                <div className = 'skills__development py-14 px-8'>
                    <div className = 'mb-8 flex justify-center items-center'>
                        <img width = '100px' height = '100px' src = '/development.png' alt = 'development' />
                    </div>

                    <div className = 'skills__title text-font text-color my-6 text-xl font-bold'>
                        Development
                    </div>

                    <div className = 'flex justify-center items-center'>
                        <p className = 'mb-8 text-lg font-thin w-9/12 lg:w-7/12'>
                            I like to code things from scratch, and enjoy bringing ideas to life.
                        </p>
                    </div>

                    <div className = 'text-lg text-font text-color-2 mt-6 mb-2'>
                        Languages I Use
                    </div>
                
                    <div className = 'mb-9 text-lg flex flex-col items-center'>
                        <p className = 'mb-1'>HTML, CSS, JavaScript</p>
                    </div>

                    <div className = 'text-lg text-font text-color-2 mt-6 mb-2'>
                        Dev Tools
                    </div>
                
                    <div className = 'mb-9 text-lg flex flex-col items-center'>
                        <p className = 'mb-2'>ReactJs</p>
                        <p className = 'mb-2'>ExpressJs</p>
                        <p className = 'mb-2'>NodeJs</p>
                        <p className = 'mb-2'>Git</p>
                        <p className = 'mb-2'>GitHub</p>
                    </div>

                    <div className = 'text-xl text-color-2 mt-6 mb-2'>
                        Databases
                    </div>
                
                    <div className = 'mb-9 text-lg flex flex-col items-center'>
                        <p className = 'mb-1'>MongoDB, SQL</p>
                    </div>
                </div>
            </div>
}

function About(){
    return(
        <>
            <div className = 'about pt-20 px-6 pb-54 text-white'>
                <div className = 'm-3 flex flex-col justify-center items-center'>
                    <div className = 'mb-6 text-center text-font text-3xl font-bold'>
                        Hi, I'm Kalash. Nice to meet you.
                    </div>

                    <div className = 'text-xl text-center w-9/12 lg:w-6/12 font-light'>
                        I'm a self-taught developer. And love to experiment with new technologies. I'm quietly confident, naturally curious, and perpetually working on improving my skills. In my spare time I like building my own products.
                    </div>
                </div>

                <SkillSet />
            </div>
        </>
        
    );
}

export default About;
