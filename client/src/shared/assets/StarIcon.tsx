import React from "react";

type StarIconProps = { active: boolean };

const StarIcon: React.FC<StarIconProps> = ({ active }) => {
  return (
    <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m9.58 14.84-5.34 2.72a.54.54 0 0 1-.56-.03.5.5 0 0 1-.18-.22.49.49 0 0 1-.03-.28l1.03-5.75L.17 7.2a.49.49 0 0 1 .03-.74c.08-.06.17-.1.26-.12l5.98-.84L9.11.28c.05-.08.11-.15.2-.2a.54.54 0 0 1 .74.2l2.68 5.23 5.98.84a.5.5 0 0 1 .42.34.49.49 0 0 1-.13.52l-4.33 4.07 1.02 5.75a.49.49 0 0 1-.2.5.53.53 0 0 1-.55.03l-5.36-2.72Z"
        fill={active ? "#F5A623" : "#E6E6EE"}
      />
    </svg>
  );
};

export default StarIcon;
