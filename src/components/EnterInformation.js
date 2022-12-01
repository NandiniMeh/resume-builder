import React from 'react';
import ReactDOM from "react-dom"
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import SecondComponent from "./resume";


function EnterInformation() {

  const [jobs, setJobs] = React.useState([1]);
  const [skills, setSkills] = React.useState([1]);
  const [languages, setLanguages] = React.useState([1]);
  const [hobbies, setHobbies] = React.useState([1]);
  const [info, setInfo] = React.useState(['']);
  const [education, setEducation] = React.useState(['']);
  const [summary, setSummary] = React.useState();
  const [listSkills, setListSkills] = React.useState(['']);
  const [listLanguages, setListLanguages] = React.useState(['']);
  const [listJobs, setListJobs] = React.useState(['']);
  const [listHobbies, setListHobbies] = React.useState(['']);


  const handleJobs = () => {
    setJobs(jobs => [...jobs, jobs[jobs.length - 1] + 1]);
  }

  const handleSkills = () => {
    setSkills(skills => [...skills, skills[skills.length - 1] + 1]);
  }

  const handleLanguages = () => {
    setLanguages(languages => [...languages, languages[languages.length - 1] + 1]);
  }

  const handleHobbies = () => {
    setHobbies(hobbies => [...hobbies, hobbies[hobbies.length - 1] + 1]);
  }

  const handleChangeName = (event) => {
    const temp = [...info]
    if (event.target.id === 'fname') {
      temp[0] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'lname') {
      temp[1] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'title') {
      temp[2] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'city') {
      temp[3] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'province') {
      temp[4] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'postalcode') {
      temp[5] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'phone') {
      temp[6] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'email') {
      temp[7] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'linkedln') {
      temp[8] = event.target.value
      setInfo(temp)
    } else if (event.target.id === 'github') {
      temp[9] = event.target.value
      setInfo(temp)
    }
  }

    const handleChangeEducation = (event) => {
    const temp = [...education]
    if (event.target.id === 'university') {
      temp[0] = event.target.value
      setEducation(temp)
    } else if (event.target.id === 'location') {
      temp[1] = event.target.value
      setEducation(temp)
    } else if (event.target.id === 'degree') {
      temp[2] = event.target.value
      setEducation(temp)
    } else if (event.target.id === 'field') {
      temp[3] = event.target.value
      setEducation(temp)
    } else if (event.target.id === 'grad') {
      temp[4] = event.target.value
      setEducation(temp)
    }
  }

    const handleChangeSummary = (event) => {
      setSummary(event.target.value)
    }

    const handleChangeSkills = (event) => {
      const temp = [...listSkills]
      temp[event.target.id - 1] = event.target.value
      setListSkills(temp)
    }

    const handleChangeLanguages = (event) => {
      const temp = [...listLanguages]
      temp[event.target.id - 1] = event.target.value
      setListLanguages(temp)
    }

    const handleChangeHobbies = (event) => {
      const temp = [...listHobbies]
      temp[event.target.id - 1] = event.target.value
      setListHobbies(temp)
    }


    const handleChangeJobs = (event) => {
      const temp = [...listJobs]
      jobs.map(function (job) {
        if (event.target.id === ('title' + job)) {
          job = job - 1;
          temp[(job * 6)] = event.target.value
        } else if (event.target.id === ('company' + job)) {
          job = job - 1;
          temp[(job * 6) + 1] = event.target.value
        } else if (event.target.id === ('location' + job)) {
          job = job - 1;
          temp[(job * 6) + 2] = event.target.value
        } else if (event.target.id === ('start' + job)) {
          job = job - 1;
          temp[(job * 6) + 3] = event.target.value
        } else if (event.target.id === ('end' + job)) {
          job = job - 1;
          temp[(job * 6) + 4] = event.target.value
        } else if (event.target.id === ('actions' + job)) {
          job = job - 1;
          temp[(job * 6) + 5] = event.target.value
        } else if (event.target.id === ('checkbox' + job) && document.getElementById('checkbox' + job)) {
          console.log("hello")
          job = job - 1;
          temp[(job * 6) + 4] = 'Present'
        }
      })
      setListJobs(temp);
    }

  const renderResume = () => {
    ReactDOM.render(<SecondComponent 
                      info = {info} 
                      education = {education} 
                      summary = {summary}
                      numSkills = {skills}
                      listSkills = {listSkills}
                      numJobs = {jobs}
                      listJobs = {listJobs}
                      numLanguages = {languages}
                      listLanguages = {listLanguages}
                      numHobbies = {hobbies}
                      listHobbies = {listHobbies}
                    />, document.getElementById("root"))
    window.scrollTo(0, 0)
  }

    return (
      <div> 
        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>What's the best way for employers to contact you?</h1>
        <TextField style={{"margin": "10px"}} id="fname" label="First Name" variant="outlined" onChange={handleChangeName}/>
        <TextField style={{"margin": "10px"}} id="lname" label="Last Name" variant="outlined" onChange={handleChangeName}/>
        <TextField style={{"margin": "10px"}} id="title" label="Professional Title" variant="outlined" onChange={handleChangeName}/> <br></br>
        <TextField style={{"margin": "10px"}} id="city" label="City" variant="outlined" onChange={handleChangeName}/>
        <TextField style={{"margin": "10px"}} id="province" label="Province" variant="outlined" onChange={handleChangeName}/>
        <TextField style={{"margin": "10px"}} id="postalcode" label="Postal Code" variant="outlined" onChange={handleChangeName}/> <br></br>
        <TextField style={{"margin": "10px"}} id="phone" label="Phone" variant="outlined" onChange={handleChangeName}/>
        <TextField style={{"margin": "10px"}} id="email" label="Email Address" variant="outlined" onChange={handleChangeName}/> <br></br>
        <TextField style={{"margin": "10px"}} id="linkedln" label="Linkedln Username" variant="outlined" onChange={handleChangeName}/> 
        <TextField style={{"margin": "10px"}} id="github" label="Github Username" variant="outlined" onChange={handleChangeName}/> 
        </form>
        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>Let's work on the Education Section!</h1>
        <TextField style={{"margin": "10px"}} multiline id="university" label="University Name" variant="outlined" onChange={handleChangeEducation}/>
        <TextField style={{"margin": "10px"}} multiline id="location" label="University Location" variant="outlined" onChange={handleChangeEducation}/> <br></br>
        <TextField style={{"margin": "10px"}} multiline id="degree" label="Degree" variant="outlined" onChange={handleChangeEducation} /> <br></br>
        <TextField style={{"margin": "10px"}} multiline id="field" label="Field of Study" variant="outlined" onChange={handleChangeEducation} />
        <TextField style={{"margin": "10px"}} multiline id="grad" label="Expected Graduation" variant="outlined" onChange={handleChangeEducation} />
        </form>
        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>Now let's fill out your work history</h1>
        <p>Employers scan your resume to see if you're a match for the role. Include relevant work experience, and descriptions of your work.
        </p>

        {jobs.map(function (job) {
          return (
            <div>
              <p style={{"margin": "10px", "margin-top": "30px"}}>Work Experience #{job}</p>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id={"title" + job} label="Title" variant="outlined" onChange={handleChangeJobs}/>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id={"company" + job} label="Organization" variant="outlined" onChange={handleChangeJobs} /> <br></br>
              <TextField style={{"margin": "10px"}} id={"location" + job} label="Location" variant="outlined" onChange={handleChangeJobs} /> <br></br>
              <TextField style={{"margin": "10px"}} id={"start" + job} label="Start Date" variant="outlined" onChange={handleChangeJobs} />
              <TextField style={{"margin": "10px"}} id={"end" + job} label="End Date" variant="outlined" onChange={handleChangeJobs} />
              <FormControlLabel style={{"margin": "10px"}} control={<Checkbox id={"checkbox" + job} onChange={handleChangeJobs}/>} label="I currently work here"/> <br></br>
              <TextField InputProps={{ sx: { width: 500, height: 300} }} style={{"margin": "10px"}} multiline id={"actions" + job} label="Action Points" variant="outlined" onChange={handleChangeJobs} />
            </div>
          )
        })}

        <Button style={{"margin": "10px"}} variant="outlined" color="success" onClick={() => handleJobs()}>+</Button>
        </form>

        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>Any skills to highlight?</h1>
        <p>Need some help? Include any technical skills, such as programming languages like C++ and Javascript, or technologies such as PowerBI!</p>
        {skills.map(function (skill) {
          return (
            <div>
              <p style={{"margin": "10px", "margin-top": "30px"}}>Skill #{skill}</p>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id={skill} label="Title" variant="outlined" onChange={handleChangeSkills} />
            </div>
          )
        })}
        <Button style={{"margin": "10px"}} variant="outlined" color="success" onClick={() => handleSkills()}>+</Button> <br></br>
        </form>

        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>What languages do you know that you would like to highlight</h1>
        <p>Need some help? Include languages that you know, and also proficiency level in brackets!</p>
        {languages.map(function (language) {
          return (
            <div>
              <p style={{"margin": "10px", "margin-top": "30px"}}>Language #{language}</p>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id={language} label="Title" variant="outlined" onChange={handleChangeLanguages} />
            </div>
          )
        })}
        <Button style={{"margin": "10px"}} variant="outlined" color="success" onClick={() => handleLanguages()}>+</Button> <br></br>
        </form>

        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>What are your interests?</h1>
        <p>Need some help? Interests such as blogging, pobcasting, writing, art, dance show a glipse of your personality to recruiters!</p>
        {hobbies.map(function (hobby) {
          return (
            <div>
              <p style={{"margin": "10px", "margin-top": "30px"}}>Interest #{hobby}</p>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id={hobby} label="Title" variant="outlined" onChange={handleChangeHobbies} />
            </div>
          )
        })}
        <Button style={{"margin": "10px"}} variant="outlined" color="success" onClick={() => handleHobbies()}>+</Button> <br></br>
        </form>
        
        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>Finally, the Summary!</h1>
        <p>Briefly tell us about your background and qualifications</p>
        <TextField 
           InputProps={{ sx: { width: 800, height: 400} }} 
           style={{"margin-top": "20px"}} 
           multiline 
           id="outlined-basic" 
           label="Write your summary here" 
           variant="outlined"
           onChange={handleChangeSummary}
        />
        </form>

        <Button style={{"margin": "10px", "margin-left": "50%", "margin-bottom": "5%"}} variant="outlined" color="success" onClick={()=>renderResume()}>Resumake!</Button> 

      </div>
    )
}

export default EnterInformation;