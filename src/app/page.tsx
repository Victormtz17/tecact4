'use client';
import { usePeopleApi } from "./hooks/usePeopleAPI";
import { useState } from "react";
import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaPhone, FaLock } from "react-icons/fa";

export default function Home() {
  const { currentPerson, error, loading, fetchData } = usePeopleApi();
  const [hoveredField, setHoveredField] = useState("name");

  if (error) return <div>Error loading data</div>;

  const getDisplayText = () => {
    if (!currentPerson) return "Hover over an icon to see details";
    switch (hoveredField) {
      case "name":
        return `${currentPerson.name.first} ${currentPerson.name.last}`;
      case "email":
        return currentPerson.email;
      case "birthday":
        return new Date(currentPerson.dob.date).toLocaleDateString();
      case "location":
        return `${currentPerson.location.city}, ${currentPerson.location.country}`;
      case "phone":
        return currentPerson.phone;
      case "password":
        return currentPerson.login.password;
      default:
        return "Hover over an icon to see details";
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ width: '400px', textAlign: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', position: 'relative' }}>
        <button onClick={fetchData} style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>
          Fetch Data
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : currentPerson ? (
          <>
            <img src={currentPerson.picture.large} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
            <h2 style={{ margin: '10px 0' }}>Hi, My name is</h2>
            <h1 style={{ margin: '10px 0', fontSize: '24px', fontWeight: 'bold' }}>{getDisplayText()}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaUser size={24} style={{ color: hoveredField === "name" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("name")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Name</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaEnvelope size={24} style={{ color: hoveredField === "email" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("email")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Email</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaCalendar size={24} style={{ color: hoveredField === "birthday" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("birthday")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Birthday</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaMapMarkerAlt size={24} style={{ color: hoveredField === "location" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("location")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Location</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaPhone size={24} style={{ color: hoveredField === "phone" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("phone")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Phone</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaLock size={24} style={{ color: hoveredField === "password" ? 'green' : 'gray', cursor: 'pointer' }} onMouseEnter={() => setHoveredField("password")} />
                <span style={{ fontSize: '12px', color: 'gray' }}>Password</span>
              </div>
            </div>
          </>
        ) : (
          <div>No person data available</div>
        )}
      </div>
    </div>
  );
}

