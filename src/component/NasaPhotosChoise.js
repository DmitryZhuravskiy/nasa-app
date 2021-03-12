import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhotosChoise() {
    const [photoData, setPhotoData] = useState(null);

    const [dateOfStartDay, setStartDay] = useState('02');
    const [dateOfStartMonth, setStartMonth] = useState('01');
    const [dateOfStartYear, setStartYear] = useState('2016');

    const [dateOfEndDay, setEndDay] = useState('05');
    const [dateOfEndMonth, setEndMonth] = useState('01');
    const [dateOfEndYear, setEndYear] = useState('2016');

    const [dateOfStartSubmit, submitStartDate] = useState('2016-01-02');
    const [dateOfEndSubmit, submitEndDate] = useState('2016-01-05');


    const [pageCount, setPageCount] = useState(12);
    const [activePage, changeActivePage] = useState(1);
    const [startPage, changeStartPage] = useState(1);
    const [endPage, changeEndPage] = useState(4);
    const [pageNumbers, setPageNumbers] = useState([]);
    const perPage = 5;

    useEffect(() => {
        fetchPhoto();
        setPageCount();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${dateOfStartSubmit}&end_date=${dateOfEndSubmit}`);
            const data = await res.json();
            setPhotoData(data);
            console.log(data.length)
            setPageCount(await data.length);
            const pageNumbersNew = await [];
            for (let i = 1; i <= Math.ceil(pageCount / perPage); i++) {
                pageNumbersNew.push(i);
            }
            setPageNumbers(pageNumbersNew)
            console.log(pageNumbers);
        }
    }, [dateOfStartSubmit, dateOfEndSubmit, pageNumbers]);

    function handleChangeStartDay(e) {
        e.preventDefault();
        setStartDay(e.target.value);
    };

    function handleChangeStartMonth(e) {
        e.preventDefault();
        setStartMonth(e.target.value);
    };

    function handleChangeStartYear(e) {
        e.preventDefault();
        setStartYear(e.target.value);
    };

    function handleChangeEndDay(e) {
        e.preventDefault();
        setEndDay(e.target.value);
    };

    function handleChangeEndMonth(e) {
        e.preventDefault();
        setEndMonth(e.target.value);
    };

    function handleChangeEndYear(e) {
        e.preventDefault();
        setEndYear(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        submitStartDate(`${dateOfStartYear}-${dateOfStartMonth}-${dateOfStartDay}`);
        submitEndDate(`${dateOfEndYear}-${dateOfEndMonth}-${dateOfEndDay}`);
    }

    function changePage(number) {
        changeActivePage(number);
        changeEndPage(number * perPage);
        changeStartPage((number - 1) * perPage);
    }

    if (!photoData) return <div />;

    return (
        <div>
            <NavBar />
            {photoData.slice(startPage, endPage).map(photo => (
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
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    !(number == activePage) && (
                        <li key={number} className='page-item'>
                            <a onClick={() => changePage(number)} href='#' className="page-link">{number}</a>
                        </li>) ||
                    (number == activePage) && (
                        <li key={number} className='page-item'>
                            <a onClick={() => changePage(number)} href='#' className="page-link page-link--active">{number}</a>
                        </li>)
                ))}
            </ul>
            <form onSubmit={(e) => handleSubmit(e)} className="nasa-photo__choise-from">
                <div className="choise-from__start-end">
                    <div className="choise-from__start">
                        <h3 className="start__title">Start day of searching</h3>
                        <div className="pin__input">
                            <label htmlFor="day-start">Day</label>
                            <input id="day-start" type="number" max="31" min="1" value={dateOfStartDay} onChange={(e) => handleChangeStartDay(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="month-start">Month</label>
                            <input id="month-start" type="number" max="12" min="1" value={dateOfStartMonth} onChange={(e) => handleChangeStartMonth(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="year-start">Year</label>
                            <input id="year-start" type="number" min="1980" max="2021" value={dateOfStartYear} onChange={(e) => handleChangeStartYear(e)} />
                        </div>
                    </div>
                    <div className="choise-from__end">
                        <h3 className="end__title">End day of searching</h3>
                        <div className="pin__input">
                            <label htmlFor="day-end">Day</label>
                            <input id="day-end" type="number" max="31" min="1" value={dateOfEndDay} onChange={(e) => handleChangeEndDay(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="month-end">Month</label>
                            <input id="month-end" type="number" max="12" min="1" value={dateOfEndMonth} onChange={(e) => handleChangeEndMonth(e)} />
                        </div>
                        <div className="pin__input">
                            <label htmlFor="year-end">Year</label>
                            <input id="year-end" type="number" min="1980" max="2021" value={dateOfEndYear} onChange={(e) => handleChangeEndYear(e)} />
                        </div>
                    </div>
                </div>
                <input className="pin__submit" type="submit" value="Get new post" />
            </form>
        </div>
    )
}