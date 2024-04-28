import React from 'react';
import ActivityCard from './activitycard';
import './activity.css';

const Activity = () => {
  return (
    <div>
      <h1 class='activitie-title'>주요 활동</h1>
      <div className="activities">
        <ActivityCard
          title="멋쟁이 사자처럼 대학 12기"
          period="2024.03~"
        />
        <ActivityCard
          title="수도권 연합 운동동아리 '이륙' 회장"
          period="2023.12~"
        />
        <ActivityCard
          title="기획디자인 스터디"
          period="2024.03~"
        />
      </div>
    </div>
  );
};

export default Activity;
