// import React from 'react';

// Heading component — render thẻ h1-h6.
const AdminHeading = ({ content, level = 2, align = 'left' }) => {

  const Tag = `h${level}`;

  const sizeH = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  }
  return <Tag 
    style={{ textAlign: align }} 
    className={`font-bold ${sizeH[level]}`}
    >
    {content}
    </Tag>;
};

export default AdminHeading;
