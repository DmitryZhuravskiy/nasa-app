import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaRandomPhoto() {
    const [photoData, setPhotoData] = useState(null);
    const [another, getAnother] = useState(0);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, [another]);

    function getAnotherPosts() {
        let some = another+1;
        getAnother(some);
    }

    if (!photoData) return <div />;

    return (
        <div className="nasa-random-photo">
            <NavBar />
            {photoData.map( photo => (
                <div className="nasa-photo__card" key={photo.date}>
                    <div className="nasa-photo__image">
                        {
                            photo.media_type === "image" ? (
                                <img src={photo.url} alt={photo.title} />
                            ) : (
                                <iframe
                                    title="space-video"
                                    src={photoData.url}
                                    frameBorder="0"
                                    gesture="media"
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="photo"
                                />)
                        }
                    </div>
                    <div className="nasa-photo__pin">
                        <h1 className="pin__title">{photo.title}</h1>
                        <p className="pin__date">{photo.date}</p>
                        <p className="pin__description">{photo.explanation}</p>
                    </div>
                </div>
            ))}
            <button className="pin__submit" onClick={() => getAnotherPosts()}>Get another random posts</button>
        </div>
    )
}