import React from 'react';
import './ActivityCard.css'; // CSS 파일을 import 합니다.

const ActivityCard = ({ title, period }) => {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p>활동기간: {period}</p>
    </div>
  );
};

export default ActivityCard;
