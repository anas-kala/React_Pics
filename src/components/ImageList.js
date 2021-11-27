import React from 'react';

const ImageList=(props)=>{
    const images= props.images.map(({discription,id,urls})=>{
        return <img alt={discription} key={id} src={urls.regular} />
    });

    return <div>{images}</div>
}

export default ImageList;