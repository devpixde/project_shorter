import React from 'react';
import './App.css';
import {ToggleButton} from "./components/ToggleButton";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {toggleEditMode} from "./features/app/appSlice";
import {useAppDispatch} from "./app/hooks";

function App() {

    const dispatch = useAppDispatch();

    const appState = useSelector((state: RootState) => {
        return state.app
    });


    return (
        <div className="App">
            <header>Shorter</header>
            <footer>
                <ToggleButton
                    elementId='editmode-toggle-button'
                    onState={appState.isEditMode}
                    onFunc={() => {
                        dispatch(toggleEditMode(null));
                    }}
                    offFunc={() => {
                        dispatch(toggleEditMode(null));
                    }}
                    className={'bg-green-600'}
                    buttonOffContent='button off' buttonOnContent='button on'/>
            </footer>
        </div>
    );
}

export default App;
