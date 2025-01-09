import { servicesPicture } from '../../dataPicture'
const Tour = () => {
  return (
    <>
      <div className="section-center featured-center">
        {servicesPicture.map((item) => {
          return (
            <article className="tour-card" key={item.id}>
              <div className="tour-img-container">
                <img src={item.photo} className="tour-img" alt="" />
                {/* <p className="tour-date">{item.date}</p> */}
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
                <div className="tour-footer">
                  {/* <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {item.country}
                  </p> */}
                  {/* <p>{item.day}</p>
                  <p>{item.price}</p> */}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Tour
