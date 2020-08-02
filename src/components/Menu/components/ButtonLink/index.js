import React from 'react';

function ButtonLink(props) {
    console.log(props)
    return (
        <a className={props.className} href={props.href} id={props.id}>
            {props.children}
        </a>
    );
}

export default ButtonLink;