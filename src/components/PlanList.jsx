import { useState } from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'

const PlanList = ({plans}) => {
  const [index, setIndex] = useState(0)


  return (
    <div>
      {
        plans.map(({name, price, list, delay}, Ci) => (
          <article key={Ci}>
            <div>
              <div>
                <h5>{name}</h5>
              </div>
              <h3>
                {price} <span>$</span>
                </h3>
                <p>/month</p>
            </div>
            <ul>
              {
                list.map(({name}, i) => (
                <li>
                  <div><BsCheckCircleFill /></div>
                  <p>{name}</p>
                </li>
                ))
              }
            </ul>
          </article>
        ))
      }
    </div>
  )
};

export default PlanList;
