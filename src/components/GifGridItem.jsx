import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log( {id, title, url});
    return (
        <div  className="card">
                <img 
                    key = {id}
                    src = {url} 
                    alt = {title}
                    title= {title}
                />
                <p> {title} </p>
        </div>
    )
}
