import { serviceLink } from '../../data'
import Service from './Service'
import Title from '../Title'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {serviceLink.map((list) => {
          const { icon, title, description, id } = list
          return (
            <Service
              key={id}
              icon={icon}
              title={title}
              description={description}
              id={id}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Services
