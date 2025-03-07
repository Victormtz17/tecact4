// components/SavedProfiles.tsx
import React from 'react';

interface Profile {
  name: {
    first: string;
    last: string;
  };
}

interface SavedProfilesProps {
  profiles: Profile[];
  onSelect: (profile: Profile) => void;
}

const SavedProfiles: React.FC<SavedProfilesProps> = ({ profiles, onSelect }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Saved Profiles</h2>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index} className="mb-2">
            <button
              className="text-blue-500"
              onClick={() => onSelect(profile)}
            >
              {`${profile.name.first} ${profile.name.last}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedProfiles;
