import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  useEffect(() => {
    const logo = document.querySelector('.logo');
    logo.classList.add('logo-animate');
  }, []);

  return (
    <nav className='NavBar'>
      <Link className='Home' to="/">Home</Link>
      <Link className='AllRuns' to="/runs">All Runs</Link>
      <img className="logo" src="https://i.imgur.com/IwuQ9M6.png" alt=""></img>
      <span className='User'>Welcome, {user.name}</span>
      <Link className='LogOut' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}