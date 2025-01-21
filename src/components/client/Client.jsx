import { servicesPicture } from "../../dataPicture";
import React, { useState } from "react";

const Tour = () => {
  const [readMoreStates, setReadMoreStates] = useState(true);

  const handleReadMore = (id) => {
    setReadMoreStates((prev) => ({ ...prev, [id]: !prev.id }));
    console.log("read more clicked", id);
  };

  return (
    <>
      <div className="section-center featured-center">
        {servicesPicture.map((item) => {
          const { id, photo, title, description } = item;
          const isreadMore = readMoreStates[id] || false;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={photo} className="tour-img" alt="" />
                {/* <p className="tour-date">{item.date}</p> */}
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {isreadMore ? description.substring(0, 100) : description}
                  <button onClick={() => handleReadMore(id)}>
                    {" "}
                    {isreadMore ? "show less" : "read more"}{" "}
                  </button>
                </p>

                {/* <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {item.country}
                  </p>
                  <p>{item.day}</p>
                  <p>{item.price}</p>
                </div> */}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Tour;
