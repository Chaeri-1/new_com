import React from "react";
import ".//profile.css"

function ProfilePic() {
  return (
    <div>
      <img style={{maxWidth: '300px'}}
        src="img/smile_cookie.jpg"
        alt="smile"
      />
    </div>
    
  )
}

export default function MyProfile() {
  return (
    <section className="profile">
      <div class="profile-title">
        <h1>About Me</h1>
      </div>
      <div class="profile-section">
        <div class="profile-left">
          <ProfilePic />
        </div>
        <div class="profile-right">
          <div class="profile-info">
            <p>안녕하세요, 저는 올해 프론트엔드 개발 공부를 시작한<br></br> 03년생 한채리라고 합니다.</p>
            <p>현재 한국외대에 재학 중입니다.<br></br>독일어와 UX상담심리를 공부하고 있어요</p>
          </div>
          <div class="profile-skills">
            <div class="profile-skill"><button>HTML & CSS</button><hr style={{width: "30%"}}/></div>
            <div class="profile-skill"><button>React Js</button><hr style={{width: "20%"}}/></div>
            <div class="profile-skill"><button>JavaScript</button><hr style={{width: "20%"}}/></div>
          </div>
        </div>
      </div>
    </section>
  );
}