import MealApp from '../assets/images/MealApp.png'
import './projects.css'
import Next from '../assets/images/Next.png'
import prisma from '../assets/SVGs/prisma.svg'
import Cohort from '../assets/images/Cohort.png'

function MyWork() {
    return (
        <>
       
        <main className="card">
            <img src={MealApp} className='img' alt="food" />
            <div className="textBox">
                <p className="text head">Meal Planner App</p>
                <button className='button'><a href="https://be-on-thyme-pi.vercel.app/myprofile"><span className='button-text'>Visit</span></a></button>
                <span className='features-text'>Features:</span>
                <ul className='features-list'>
                    <li>Authentication</li>
                    <li>Meal Management</li>
                    <li>Cooking Time Notifications</li>
                </ul>
                <div className='technologies'><span className='text price technologies'>Technologies Used:</span>
                    <p className='technologies' align="center">
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
                        <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src={Next} className='technologies' alt="nextjs" width="56" height="40" /></a>
                        <a href="https://www.prisma.io/" target='_blank' rel='noreffer'> <img src={prisma} className='technologies' alt="Prisma" width="40" height="40" /></a>
                        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> </p>
                </div>
            </div>
        </main>
        <main className="card">
            <img src={Cohort} className='img' alt="food" />
            <div className="textBox">
                <p className="text head">Cohort Manager App</p>
                <button className='button'><a href="https://github.com/LAVINIABENZAR/react-cohort-dashboard-challenge"><span className='button-text'>See on GitHub</span></a></button>
                <span className='features-text'>The User is Able To:</span>
                <ul className='features-list'>
                    <li>Create Posts</li>
                    <li>Leave comments</li>
                    <li>Delete Comments</li>
                </ul>
                <div className='technologies'><span className='text price technologies'>Technologies Used:</span>
                    <p className='technologies' align="center">
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> </p>
                </div>
            </div>
        </main>
        </>
    )
}

export default MyWork