import './Introduction.css';

function Introduction() {
    return (
        <>
            <div className='introduction py-4 px-6'>
                <div className='p-4 text-center'>
                    <div className="introduction__title mb-6">
                        Designer & Web Developer
                    </div>

                    <div className="introduction__subtitle mb-6">
                        I 💛 to develop and build things.
                    </div>

                    <div className="my-8 flex justify-center items-center introduction__illustration">
                        <img width="200px" height="200px" src='/web/boy.png' alt='boy' />
                    </div>
                </div>

                <div className='illustration px-6 flex justify-center items-center'>
                    <img src='/web/working.svg' alt='working' />
                </div>
            </div>
        </>
    );
}

export default Introduction;