import React from "react";
import './/footer.css'

const url = "https://github.com/Chaeri-1"
const url1 = "https://open.kakao.com/o/sFXVaeXc"

export default function Footer() {
  return (
    <div class="footer">
      <div class='contacts'>
        <h2>Contact</h2>
        <div class="contact-links">
          <button onClick={()=>{window.open(url)}}>
            Github
          </button>
          <button>
            alfsdo@husf.ac.kr
          </button>
          <button onClick={()=>{window.open(url1)}}>
            Kakao
          </button>
        </div>
      </div>
    </div>
  );
}