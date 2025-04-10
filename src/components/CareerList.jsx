import Button from "./Button";
import { check } from "../assets";
import { careerList } from "../constants";

const CareerList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {careerList.map((item) => (
        <div
          key={item.id}
          className="w-[15rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-4"
        >
          <h4 className="h4 mb-4 min-h-[6rem]">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <ul>
            {item.qualifications.map((qualification, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6 min-h-[7rem]"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{qualification}</p>
              </li>
            ))}
          </ul>

          <Button className="mb-6" href="#contact" white>
            Apply Now
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
