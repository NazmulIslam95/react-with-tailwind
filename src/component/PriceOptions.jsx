import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "No personal trainer sessions",
        "24/7 gym access",
        "Discounts on protein supplements",
      ],
      price: 30.99,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited personal trainer sessions",
        "Group fitness classes included",
        "Access to sauna and spa facilities",
        "Nutrition consultation included",
      ],
      price: 59.99,
    },
    {
      id: 3,
      name: "Student Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Discounted personal trainer sessions",
        "Valid student ID required",
        "Access during off-peak hours",
        "Monthly fitness challenges",
      ],
      price: 24.99,
    },
    {
      id: 4,
      name: "Family Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Discounted personal trainer sessions for family members",
        "Up to 4 family members included",
        "Access to childcare services",
        "Family fitness classes",
      ],
      price: 99.99,
    },
    {
      id: 5,
      name: "Senior Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Personalized senior fitness program",
        "Access during off-peak hours",
        "Senior wellness workshops",
        "Discounted massage therapy",
      ],
      price: 19.99,
    },
    {
      id: 6,
      name: "Platinum Membership",
      features: [
        "Access to all gym facilities",
        "Unlimited personal trainer sessions",
        "VIP locker room access",
        "Exclusive access to premium fitness classes",
        "Access to sauna and spa facilities",
        "Nutrition consultation included",
        "Complimentary massage therapy sessions",
      ],
      price: 99.99,
    },
  ];

  return (
    <div className="w-10/12 m-auto">
      <h2 className="text-5xl text-center font-bold">
        Best Prices in the town
      </h2>
      <div className="grid lg:grid-cols-3 m-8 gap-8">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
