import classes from './Toggle.module.css';
import { themeActions } from '../../store/theme';
import {useDispatch, useSelector} from 'react-redux'


const Toggle = () => {
    const dispatch = useDispatch();
    const isChange = useSelector(state => state.theme.isClicked)
    const themeChanger = () => {
     
        dispatch(themeActions.toggle())
      
    }

    return (
        <div className={classes.darkmode}>
        <input type="checkbox" className={classes.checkbox} id="checkbox" onChange={themeChanger} />
        <label htmlFor="checkbox" style={{backgroundColor:isChange ? 'white' : 'black'}} className={classes.label}>
          {/* <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" /> */}
          <div style={{backgroundColor:isChange ? 'black' : 'white'}} className={classes.ball}></div>
        </label>
      </div>
    )
};

export default Toggle;