// UserCard.tsx
import React from "react";
import useFetchData from "./fetchHook"; // Import the custom hook
import { User } from "./userInterfaces"; // Import the User interface

const UserCard = () => {
  // Use the custom fetch hook to get data
  const { data, loading, error } = useFetchData("https://randomuser.me/api/");

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  if (!data) {
    return <div>No user data available</div>; // Show message when no data is available
  }

  // Display the user card when data is available
  return (
    <div className="user-card">
      <img src={data.picture.large} alt={`${data.name.first} ${data.name.last}`} />
      <h3>{data.name.title} {data.name.first} {data.name.last}</h3>
      <p>Gender: {data.gender}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Location: {data.location.city}, {data.location.state}, {data.location.country}</p>
    </div>
  );
};

export default UserCard;

