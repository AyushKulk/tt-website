import image from '../assets/tt-logo-2.png';
import './Recruitment.css';

const Recruitment = () => {
    return (
        <div className='rush-page'>
            <img src={image} alt="theta tau" className='tt-image'></img>
            <div className='rush-intro'>
                <h1 className='header-style' style={{ fontSize: '40px' }}>What is Rush?</h1>
                <p className='text-style'>Recruitment happens twice a year at the beginning of every 
                    Autumn and Spring quarter. Rush is a week long process where 4 events are held so 
                    that the current members of Theta Tau can meet and get to know potential members!!!
                </p>

            </div>
            <h1 className='header-style' style={{ fontSize: '60px' }}>Fall Rush '24</h1>
            <h2>Travel with Theta Tau</h2>

            <h1 className='header-style' style={{ fontSize: '35px' }}>FAQs</h1>
        </div>
    )
}

export default Recruitment;