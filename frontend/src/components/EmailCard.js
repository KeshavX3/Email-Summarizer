import React from 'react';

const EmailCard = ({ subject, sender, summary }) => (
  <div className="p-4 bg-white rounded-2xl shadow-md mb-4">
    <h2 className="text-xl font-semibold text-blue-800">{subject}</h2>
    <p className="text-sm text-gray-500">From: {sender}</p>
    <p className="mt-2 text-gray-700">{summary}</p>
  </div>
);

export default EmailCard;
