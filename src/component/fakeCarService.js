// import React from "react";
const cars = [
  {
    _id: 1,
    driver: "Caleb",
    email: "buyananderson@gmail.com",
    type: "TOYOTA",
    plaque: "AB6665DRC",
    phoneNumber: "+2507845213173",
  },
  {
    _id: 2,
    driver: "Baleb",
    email: "buyananderson@gmail.com",
    type: "TOYOTA",
    plaque: "AB6665DRC",
    phoneNumber: "+25078413173",
  },

  {
    _id: 3,
    driver: "Taleb",
    email: "buyananderson@gmail.com",
    type: "TOYOTA",
    plaque: "AB6665DRC",
    phoneNumber: "+25078413173",
  },

  {
    _id: 4,
    driver: "Paleb",
    email: "bq11anderson@gmail.com",
    type: "MERCEDENZ",
    plaque: "AB6665DRC",
    phoneNumber: "+25078413173",
  },
  {
    _id: 5,
    driver: "Maleb",
    email: "bunderson@gmail.com",
    type: "MERCEDENZ",
    plaque: "AB6665DRC",
    phoneNumber: "+25078413173",
  },
  {
    _id: 6,
    driver: "Caleb",
    email: "buyason@gmail.com",
    type: "TOYOTA",
    plaque: "AB6665DRC",
    phoneNumber: "+25078413173",
  },
  {
    _id: 7,
    driver: "zaleb",
    email: "buyananderson@gmail.com",
    type: "TOYOTA",
    plaque: "AB6665DRC",
    phoneNumber: "+2507845213173",
  },
  {
    _id: 8,
    driver: "11aleb",
    email: "bu@gmail.com",
    type: "MERCEDEN",
    plaque: "AB6665DRC",
    phoneNumber: "+2507845213173",
  },
];

export function getCars() {
  return cars;
}
export function addCar(car) {
  let upDateCar = cars.find((acar) => acar._id === car._id) || {};
  upDateCar.driver = car.driver;
  upDateCar.type = car.type;
  upDateCar.email = car.email;
  upDateCar.phoneNumber = car.phoneNumber;
  upDateCar.plaque = car.plaque;
  if (!upDateCar._id) {
    upDateCar._id = cars.length + 1;
    cars.push(upDateCar);
  }
  return upDateCar;
}
