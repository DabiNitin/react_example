import React, { useState } from 'react';

/*
'withHoverHOC' is a Higher order component
*/
const withHoverHOC = (WrappedComponent: any) => {
    /*
    take 'MouseHoverComponent' component as a parameter
    */
    const WithHover = () => {
        const [textHover, setHover] = useState<boolean>(false);
        const [textColor, setTextColor] = useState<string>('black');
        let onClickFun = () => {
            const color = textColor === 'red' ? 'black' : 'red';
            setTextColor(color);
        }

        /*
        Pass required properties as props in 'MouseHoverComponent' component
        */
        return <WrappedComponent
            textColor={textColor}
            textHover={textHover}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => onClickFun()} />
    }

    /*
    return new component 'WithHover'
    */
    return WithHover;
}

/*
Higher order component
*/
export default withHoverHOC;