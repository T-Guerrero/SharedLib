import React, {Fragment} from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes/> 
            </BrowserRouter>
        </Fragment>
    )
}

export default App;