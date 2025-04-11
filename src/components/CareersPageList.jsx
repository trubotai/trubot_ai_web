import Button from "./Button";
import { check } from "../assets";
import { careersPageList } from "../constants";

const CareerList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {careersPageList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col h-full bg-n-8 border border-n-6 rounded-2xl p-6"
        >
          <h4 className="h4 mb-4 text-center">{item.title}</h4>

          <p className="body-2 mb-3 text-n-1/50">{item.description}</p>

          <ul className="flex-grow">
            {item.qualifications.map((qualification, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{qualification}</p>
              </li>
            ))}
          </ul>

          <Button className="mt-auto" href="#contact" white>
            Apply Now
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
