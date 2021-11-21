import NavBar from "../../components/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeDay,
  handleChangeMonth,
  handleChangeYear,
  handleSubmit,
  fetchPhoto
} from "./photoSlice";

const Photo = () => {
  const {
    photoData,
    dateOfDay,
    dateOfMonth,
    dateOfYear,
    dateOfPhotoSubmit
  } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(dateOfPhotoSubmit));
    console.log(photoData, dateOfPhotoSubmit);
  }, [dateOfPhotoSubmit]);

  if (!photoData) return <div className="alert-message">There is no data</div>;

  return (
    <div className="nasa-photo">
      <NavBar />
      <div className="nasa-photo__card">
        <div className="nasa-photo__image">
          {photoData.media_type === "image" ? (
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
            />
          )}
        </div>
        <div className="nasa-photo__pin">
          <h1 className="pin__title">{photoData.title}</h1>
          <p className="pin__date">{photoData.date}</p>
          <p className="pin__description">{photoData.explanation}</p>
          <form
            onSubmit={(e) => dispatch(handleSubmit(e))}
            className="nasa-photo__choise-from"
          >
            <div className="pin__input">
              <label htmlFor="day">Day</label>
              <input
                id="day"
                type="number"
                max="31"
                min="1"
                value={dateOfDay}
                onChange={(e) => dispatch(handleChangeDay(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="month">Month</label>
              <input
                id="month"
                type="number"
                max="12"
                min="1"
                value={dateOfMonth}
                onChange={(e) => dispatch(handleChangeMonth(e.target.value))}
              />
            </div>
            <div className="pin__input">
              <label htmlFor="year">Year</label>
              <input
                id="year"
                type="number"
                min="1980"
                max="2021"
                value={dateOfYear}
                onChange={(e) => dispatch(handleChangeYear(e.target.value))}
              />
            </div>
            <input className="pin__submit" type="submit" value="Get new post" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Photo;
