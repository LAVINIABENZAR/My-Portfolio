import MealApp from '../assets/images/MealApp.png'
import './projects.css'
import Next from '../assets/images/Next.png'
import prisma from '../assets/SVGs/prisma.svg'
import Cohort from '../assets/images/Cohort.png'
import blog from '../assets/images/blog.png'
import tailwind from '../assets/SVGs/tailwind.svg'

function MyWork() {
    return (
        <>
        <div className='main-title'>Here is some of my work</div>
        <main className="card"> 
            <img src={blog} className='img' alt="food" />
            <div className="textBox">
                <p className="text head">Food Blog</p>
                <span className='features-text'>A place where you can get inspired with cooking by choosing the most delicious meals from the coolest movies</span>
                <div className='technologies'><span className='text price technologies'>Technologies Used:</span>
                    <p className='technologies' align="center">
                        <img src={Next} className='technologies' alt="nextjs" width="56" height="40" />
                        <img src={tailwind} className='technologies' alt="Prisma" width="40" height="40" />
                       <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />  </p>
                </div>
            </div>
        </main>
        <main className="card"> 
            <img src={MealApp} className='img' alt="food" />
            <div className="textBox">
                <p className="text head">Meal Planner App</p>
                <button className='button'><a href="https://be-on-thyme-pi.vercel.app"><span className='button-text'>Visit</span></a></button>
                <span className='features-text'>Features:</span>
                <ul className='features-list'>
                    <li>Authentication</li>
                    <li>Meal Management</li>
                    <li>Cooking Time Notifications</li>
                </ul>
                <div className='technologies'><span className='text price technologies'>Technologies Used:</span>
                    <p className='technologies' align="center">
                        <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                        <img src={Next} className='technologies' alt="nextjs" width="56" height="40" />
                        <img src={prisma} className='technologies' alt="Prisma" width="40" height="40" />
                         <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> 
                       <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />  </p>
                </div>
            </div>
        </main>
        <main className="card">
            <img src={Cohort} className='img' alt="food" />
            <div className="textBox">
                <p className="text head">Cohort Manager App</p>
                <button className='button'><a href="https://github.com/LAVINIABENZAR/react-cohort-dashboard-challenge"><span className='button-text'>View on GitHub</span></a></button>
                <span className='features-text'>The User is Able To:</span>
                <ul className='features-list'>
                    <li>Create Posts</li>
                    <li>Leave comments</li>
                    <li>Delete Comments</li>
                </ul>
                <div className='technologies'><span className='text price technologies'>Technologies Used:</span>
                    <p className='technologies' align="center">
                         <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                       <img className='technologies' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /></p>
                </div>
            </div>
        </main>
        </>
    )
}

export default MyWork