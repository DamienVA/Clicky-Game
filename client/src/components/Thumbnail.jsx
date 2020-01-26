import React from 'react';

export default function Thumbnail(props) {
    const styles = {
        maxWidth: '200px',
    };

    return (
        <img src={props.src} onClick={props.onClick} className='img-thumbnail' alt='img' style={styles} />
    );
}