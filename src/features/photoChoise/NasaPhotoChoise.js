import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  photoData,
  setStartDay,
  setStartMonth,
  setStartYear,
  setEndDay,
  setEndMonth,
  setEndYear,
  setPageCount,
  changeActivePage,
  changeStartPage,
  changeEndPage,
  setPageNumbers,
  fetchPhoto
} from "./photoChoiseSlice";
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhotosChoise() {
  const pageNumbersNew = [];
  const {
    photoData,
    dateOfStartDay,
    dateOfStartMonth,
    dateOfStartYear,
    dateOfStartSubmit,
    dateOfEndDay,
    dateOfEndMonth,
    dateOfEndYear,
    dateOfEndSubmit,
    pageCount,
    activePage,
    startPage,
    endPage,
    pageNumbers,
    perPage
  } = useSelector((state) => state.photoChoise);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto());
    dispatch(setPageCount(photoData.length));
    dispatch(
      dateOfStartSubmit(
        `${dateOfStartYear}-${dateOfStartMonth}-${dateOfStartDay}`
      )
    );
    dispatch(
      dateOfEndSubmit(`${dateOfEndYear}-${dateOfEndMonth}-${dateOfEndDay}`)
    );

    for (let i = 1; i <= Math.ceil(pageCount / perPage); i++) {
      pageNumbersNew.push(i);
    }
    dispatch(setPageNumbers(pageNumbersNew));
  }, [dateOfStartSubmit, dateOfEndSubmit, pageNumbers]);

  function changePage(number) {
    dispatch(changeActivePage(number));
    dispatch(changeEndPage(number * perPage));
    dispatch(changeStartPage((number - 1) * perPage));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPhoto());
  };

  return (
    <div>
      <NavBar />
      {photoData.slice(startPage, endPage).map((photo) => (
        <div className="nasa-photo__card" key={photo.date}>
          <div className="nasa-photo__image">
            {photo.media_type === "image" ? (
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
              />
            )}
          </div>
          <div className="nasa-photo__pin">
            <h1 className="pin__title">{photo.title}</h1>
            <p className="pin__date">{photo.date}</p>
            <p className="pin__description">{photo.explanation}</p>
          </div>
        </div>
      ))}
      <ul className="pagination">
        {pageNumbers.map(
          (number) =>
            (!(number == activePage) && (
              <li key={number} className="page-item">
                <a
                  onClick={() => dispatch(changePage(number))}
                  href="#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            )) ||
            (number == activePage && (
              <li key={number} className="page-item">
                <a
                  onClick={() => dispatch(changePage(number))}
                  href="#"
                  className="page-link page-link--active"
                >
                  {number}
                </a>
              </li>
            ))
        )}
      </ul>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="nasa-photo__choise-from"
      >
        <div className="choise-from__start-end">
          <div className="choise-from__start">
            <h3 className="start__title">Start day of searching</h3>
            <div className="pin__input">
              <label htmlFor="day-start">Day</label>
              <input
                id="day-start"
                type="number"
                max="31"
                min="1"
                value={dateOfStartDay}
                onChange={(e) => dispatch(setStartDay(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="month-start">Month</label>
              <input
                id="month-start"
                type="number"
                max="12"
                min="1"
                value={dateOfStartMonth}
                onChange={(e) => dispatch(setStartMonth(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="year-start">Year</label>
              <input
                id="year-start"
                type="number"
                min="1980"
                max="2021"
                value={dateOfStartYear}
                onChange={(e) => dispatch(setStartYear(e.target.value))}
              />
            </div>
          </div>
          <div className="choise-from__end">
            <h3 className="end__title">End day of searching</h3>
            <div className="pin__input">
              <label htmlFor="day-end">Day</label>
              <input
                id="day-end"
                type="number"
                max="31"
                min="1"
                value={dateOfEndDay}
                onChange={(e) => dispatch(setEndDay(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="month-end">Month</label>
              <input
                id="month-end"
                type="number"
                max="12"
                min="1"
                value={dateOfEndMonth}
                onChange={(e) => dispatch(setEndMonth(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="year-end">Year</label>
              <input
                id="year-end"
                type="number"
                min="1980"
                max="2021"
                value={dateOfEndYear}
                onChange={(e) => dispatch(setEndYear(e.target.value))}
              />
            </div>
          </div>
        </div>
        <input className="pin__submit" type="submit" value="Get new post" />
      </form>
    </div>
  );
}
