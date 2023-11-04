import { Accordion } from "../components";
import { data } from "../constants";


const Faq = () => {

  const {icon, title, accordions} = data.faq

  return (
    <section className="section mt-[480px] lg:mt-[280px]">
      <div className="container mx-auto">

        <div>
          <img src={icon} alt="icon"
          className="lg:hidden"
          />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200">.</span>
            </h2>
        </div>
        <div>
          {
            accordions.map((accordion, i) => (
              <Accordion accordion={accordion} key={i} />
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Faq;
