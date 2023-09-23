import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    

    return (
        <div>
            <h1>Sorry, an unexpected error has occurred.</h1>
            <h3>Check DevTools to see more info</h3>
        </div>
    );
};

export default ErrorPage;