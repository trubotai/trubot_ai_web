interface CareerIntroProps {
  location: string;
  type: string;
}

const CareerIntro = ({ location, type }: CareerIntroProps) => {
  return (
    <p className="text-sm text-gray-600 mb-6 text-center">
      {location} · {type}
    </p>
  );
};

export default CareerIntro;
