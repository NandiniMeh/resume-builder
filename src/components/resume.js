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
                    <h4 class="degree">MSc in Computer Science</h4>
                    <h5 class="meta">University of London</h5>
	                    <div class="time">2016 - 2018</div>
                </div>
                <div class="item">
                    <h4 class="degree">BSc in Applied Mathematics</h4>
                    <h5 class="meta">Bristol University</h5>
                    <div class="time">2012 - 2016</div>
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
        
        <div class="main-wrapper">
            
            <section class="section summary-section">
                <h2 class="section-title">Career Profile</h2>
                <div class="summary">
                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                </div>
            </section>
            
            <section class="section experiences-section">
                <h2 class="section-title">Experiences</h2>
                
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Lead Developer</h3>
                            <div class="time">2022 - Present</div>
                        </div>
                        <div class="company">Startup Hubs, San Francisco</div>
                    </div>
                    <div class="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Senior Software Engineer</h3>
                            <div class="time">2018 - 2022</div>
                        </div>
                        <div class="company">Google, London</div>
                    </div>
                    <div class="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                        
                    </div>
                </div>
                
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">UI Developer</h3>
                            <div class="time">2016 - 2018</div>
                        </div>
                        <div class="company">Amazon, London</div>
                    </div>
                    <div class="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                    </div>
                </div>
                
            </section>
            
            <section class="section projects-section">
                <h2 class="section-title">Projects</h2>
                <div class="intro">
                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                </div>
                <div class="item">
                    <span class="project-title">CoderPro</span> - <span class="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
                    
                </div>
                <div class="item">
                    <span class="project-title"></span> - <span class="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
                </div>
                <div class="item">
                    <span class="project-title"></span> - <span class="project-tagline">A portfolio website template designed for software developers.</span>
                </div>
                <div class="item">
                    <span class="project-title"></span> - <span class="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
                </div>
                <div class="item">
                    <span class="project-title"></span> - 
                    <span class="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                </div>
            </section>
            
            <section class="skills-section section">
                <h2 class="section-title">Skills</h2>
                <div class="skillset">        
                    <div class="item">
                        <h3 class="level-title">Python &amp; Django</h3>                         
                    </div>
                    
                    <div class="item">
                        <h3 class="level-title">Javascript</h3>                           
                    </div>
                    
                    <div class="item">
                        <h3 class="level-title">React &amp; Angular</h3>                           
                    </div>
                    
                    <div class="item">
                        <h3 class="level-title">HTML5 &amp; CSS</h3>                              
                    </div>
                    
                    <div class="item">
                        <h3 class="level-title">Ruby on Rails</h3>                               
                    </div>
                    
                    <div class="item">
                        <h3 class="level-title">Sketch &amp; Photoshop</h3>                             
                    </div>
                    
                </div>  
            </section>
            
        </div>
    </div>
  );
}
export default SecondComponent;