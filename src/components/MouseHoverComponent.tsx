import React from 'react';
import withHoverHOC from './withHoverHOC';

interface PropTypes {
    textHover: boolean,
    textColor: string,
  }

function MouseHoverComponent(props: PropTypes) {
    const { textColor, textHover, ...divProps } = props;
    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>Mouse {textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}

/* 
pass 'MouseHoverComponent' component in 'withHoverHOC' as a argument
*/
export default withHoverHOC(MouseHoverComponent);