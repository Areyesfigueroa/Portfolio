import React from 'react';

const Link = props => (<a className={props.class} href={props.link}>{props.children}</a>);

export default Link;