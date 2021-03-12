import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    const [dateOfDay, setDay] = useState('01');
    const [dateOfMonth, setMonth] = useState('02');
    const [dateOfYear, setYear] = useState('2016');

    const [dateOfPhotoSubmit, submitNewDate] = useState("2016-01-02");

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateOfPhotoSubmit}`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, [dateOfPhotoSubmit]);

    function handleChangeDay(e) {
        e.preventDefault();
        setDay(e.target.value);
    };

    function handleChangeMonth(e) {
        e.preventDefault();
        setMonth(e.target.value);
    };

    function handleChangeYear(e) {
        e.preventDefault();
        setYear(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        submitNewDate(`${dateOfYear}-${dateOfMonth}-${dateOfDay}`);
    }

    if (!photoData) return <div />;

    return (
        <div className="nasa-photo">
            <NavBar />
            <div className="nasa-photo__card">
                <div className="nasa-photo__image">
                    {
                        photoData.media_type === "image" ? (
                            <img src={photoData.url} alt={photoData.title} />
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
                    <h1 className="pin__title">{photoData.title}</h1>
                    <p className="pin__date">{photoData.date}</p>
                    <p className="pin__description">{photoData.explanation}</p>
                    <form onSubmit={(e) => handleSubmit(e)} className="nasa-photo__choise-from">
                        <div className="pin__input">
                            <label htmlFor="day">Day</label>
                            <input id="day" type="number" max="31" min="1" value={dateOfDay} onChange={(e) => handleChangeDay(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="month">Month</label>
                            <input id="month" type="number" max="12" min="1" value={dateOfMonth} onChange={(e) => handleChangeMonth(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="year">Year</label>
                            <input id="year" type="number" min="1980" max="2021" value={dateOfYear} onChange={(e) => handleChangeYear(e)} />
                        </div>
                        <input className="pin__submit" type="submit" value="Get new post" />
                    </form>
                </div>
            </div>
        </div>
    )
}