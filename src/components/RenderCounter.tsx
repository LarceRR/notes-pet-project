import React, { useRef } from 'react';

const RenderCounter = (props: any) => {
    const renderCounter = useRef<number>(0)
    renderCounter.current = renderCounter.current + 1;

    return (
        <h1>Renders: {renderCounter.current}</h1>
    );
};

export default RenderCounter;