import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_THEME } from '../store/store';
import './toggle.css';

function SwitcherTheme() {
    const toggle = useSelector(state => state);
    const dispatch = useDispatch();

    const setToggle =  () => {
        dispatch({ type: TOGGLE_THEME });
    }

    return (
        <div className={toggle}>
            <h1>{toggle === 'light' ? 'Светлая' : 'Темная'} тема</h1>
            <button className={toggle} onClick={setToggle}>Сменить тему</button>
        </div>
    );
}

export default SwitcherTheme;