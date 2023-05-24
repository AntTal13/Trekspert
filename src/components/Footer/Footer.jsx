import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className='Timer'>
                <Link className='TimerFooter' to="/timer">Timer</Link>
            </div>
            <div className="footer">
                <a className="linkedIn" href="https://www.linkedin.com/in/anthony-talarico/">About The Creator</a>
            </div>
        </>
    )
}