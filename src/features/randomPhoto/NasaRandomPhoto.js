import React from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getAnotherPosts, fetchPhoto } from "./randomPhotoSlice";

const NasaRandomPhoto = () => {
  const { photoData, dataClicker } = useSelector((state) => state.randomPhoto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto());
  }, [dataClicker]);

  if (!photoData) return <div />;

  return (
    <div className="nasa-random-photo">
      <NavBar />
      {photoData.map((photo) => (
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
      <button
        className="pin__submit"
        onClick={() => dispatch(getAnotherPosts())}
      >
        Get another random posts
      </button>
    </div>
  );
};

export default NasaRandomPhoto;