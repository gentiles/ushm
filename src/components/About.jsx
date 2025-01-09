import about from '../images/rickyPic.png'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="ricky picture" />
        </div>
        <article className="about-info">
          <h3>who we are</h3>
          <h4>Driven by Passion, Powered by Purpose</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
