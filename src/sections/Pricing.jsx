import { PlanList } from "../components";
import { data } from "../constants";


const Pricing = () => {

  const {icon, title, plans} = data.pricing


  return (
    <section>
      <div className="container mx-auto">
        <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
          <img src={icon} alt="icon" />
          <h2 className="h2">
            {title}
            <span className="text-primary-200">.</span>
            </h2>
        </div>
      </div>

      <PlanList plans={plans} />
    </section>
  )
};

export default Pricing;
