import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../../places/components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous Skyscrapers in the world",
    imageUrl:
      "https://i.pinimg.com/originals/6b/0d/d2/6b0dd2a76e1a9798f30052b92b685318.jpg",
    location: {
      lat: 20.067276,
      lng: -71.3967925,
    },
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous Skyscrapers in the world",
    imageUrl:
      "https://i.pinimg.com/originals/6b/0d/d2/6b0dd2a76e1a9798f30052b92b685318.jpg",
    location: {
      lat: 20.067276,
      lng: -71.3967925,
    },
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const result = DUMMY_PLACES.filter((user) => user.creator === userId);
  return <PlaceList items={result} />;
};

export default UserPlaces;
