import React from "react";
import "./orbit-1.css"

// Second simple component with heading tag
function SecondComponent(props) {
  return (
        <div class="wrapper mt-lg-5">
        <div class="sidebar-wrapper">
            <div class="profile-container">
                <h1 class="name">{props.info[0]} {props.info[1]}</h1>
                <h3 class="tagline">{props.info[2]}</h3>
                <h3 class="tagline">{props.info[3]}, {props.info[4]}</h3>
                <h3 class="tagline">{props.info[5]}</h3>
            </div>
            
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list" style={{"margin-left": "-25px"}}>
                    <li class="email">{props.info[7]}</li>
                    <li class="phone">{props.info[6]}</li>
                    <li class="website">portfoliosite.com</li>
                    <li class="linkedin">linkedin.com/in/{props.info[8]}</li>
                    <li class="github">github.com/{props.info[9]}</li>
                </ul>
            </div>
            <div class="education-container container-block">
                <h2 class="container-block-title">Education</h2>
                <div class="item">
                    <h4 class="degree">{props.education[2]}</h4>
                    <h4 class="degree">{props.education[3]}</h4>
                    <h5 class="meta">{props.education[0]}</h5>
                    <h5 class="meta">{props.education[1]}</h5>
	                    <div class="time">{props.education[4]}</div>
                </div>
            </div>
            
            <div class="languages-container container-block">
                <h2 class="container-block-title">Languages</h2>
                <ul class="list-unstyled interests-list">
                    <li>English <span class="lang-desc">(Native)</span></li>
                    <li>French <span class="lang-desc">(Professional)</span></li>
                    <li>Spanish <span class="lang-desc">(Professional)</span></li>
                </ul>
            </div>
            
            <div class="interests-container container-block">
                <h2 class="container-block-title">Interests</h2>
                <ul class="list-unstyled interests-list">
                    <li>Climbing</li>
                    <li>Snowboarding</li>
                    <li>Cooking</li>
                </ul>
            </div>
            
        </div>
        
        <div class="main-wrapper" style={{"height": "100vh"}}>
            
            <section class="section summary-section">
                <h2 class="section-title">Summary of Qualifications</h2>
                <div class="summary">
                    <p>{props.summary}</p>
                </div>
            </section>
            
            <section class="section experiences-section">
                <h2 class="section-title">Experiences</h2>

            {props.numJobs.map(function (job) {
                   return (       
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{props.listJobs[(job - 1) * 6]}</h3>
                            <div class="time">{props.listJobs[(job - 1) * 6 + 3]} - {props.listJobs[(job - 1) * 6 + 4]}</div>
                        </div>
                        <div class="company">{props.listJobs[(job - 1) * 6 + 1]}, {props.listJobs[(job - 1) * 6 + 2]}</div>
                    </div>
                    <div class="details">
                        <p>{props.listJobs[(job - 1) * 6 + 5]}</p>
                    </div>
                </div>
            )})}  
                
            </section>
            
            <section class="skills-section section">
                <h2 class="section-title">Skills</h2>
                <div class="skillset"> 
                {props.numSkills.map(function (skill) {
                   return (       
                       <div class="item">
                        <h3 class="level-title">{props.listSkills[skill - 1]}</h3>                         
                       </div>
                     )})}     
                </div>  
            </section>
        </div>
    </div>
  );
}
export default SecondComponent;