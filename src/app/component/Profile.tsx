import React, { useState } from 'react';

interface Profile {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  login: {
    password: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  picture: {
    large: string;
  };
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>('name');

  const getDisplayText = () => {
    switch (hoveredIcon) {
      case 'name':
        return `Hi, my name is:\n${profile.name.first} ${profile.name.last}`;
      case 'email':
        return `My email address is:\n${profile.email}`;
      case 'dob':
        return `My birthdate is:\n${new Date(profile.dob.date).toLocaleDateString()}`;
      case 'phone':
        return `My phone number is:\n${profile.phone}`;
      case 'password':
        return `My password is:\n${profile.login.password}`;
      case 'address':
        return `My address is:\n${profile.location.street.number} ${profile.location.street.name}`;
      default:
        return `Hi, my name is:\n${profile.name.first} ${profile.name.last}`;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 relative flex flex-col items-center w-80 h-80">
      <img src={profile.picture.large} alt="Profile" className="w-16 h-16 rounded-full mb-4" />
      <div className="text-center mb-4 whitespace-pre-line">
        <h2 className="text-xl font-bold">{getDisplayText()}</h2>
      </div>
      <div className="flex space-x-4 mt-4">
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('name')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Name
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('email')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Email
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('dob')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Birthday
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('phone')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Phone
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('password')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Password
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHoveredIcon('address')}
        >
          <div className="text-gray-500 transition-transform transform group-hover:-translate-y-1">
            Address
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
