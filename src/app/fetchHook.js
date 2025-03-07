import { useState, useEffect } from 'react';

const useFetchProfile = () => {
  const [profile, setProfile] = useState(null);
  const [savedProfiles, setSavedProfiles] = useState([]);

  // Function to fetch a profile from the API
  const fetchProfile = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    setProfile(data.results[0]);
  };

  // Automatically fetch profile when the component mounts
  useEffect(() => {
    fetchProfile();
  }, []);

  // Function to refresh the current profile
  const handleRefresh = () => {
    if (profile) {
      setSavedProfiles([...savedProfiles, profile]); // Save the current profile
    }
    fetchProfile(); // Fetch a new profile
  };

  // Function to select a saved profile
  const handleSelectProfile = (selectedProfile) => {
    setProfile(selectedProfile); // Set the selected profile as the current profile
  };

  return {
    profile,
    savedProfiles,
    handleRefresh,
    handleSelectProfile
  };
};

export default useFetchProfile;
