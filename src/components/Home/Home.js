import classes from './Home.module.css';
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className={classes.home}>
        <h3>Welcome to Expense Tracker</h3>
        <p>Your profile is incomplete.<NavLink to="/profile" style={{textDecoration: 'none'}}>Complete Now</NavLink></p>
        </div>
    )
}

export default Home;