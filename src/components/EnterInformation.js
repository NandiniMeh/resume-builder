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
  const [info, setInfo] = React.useState(['']);

  const handleJobs = () => {
    setJobs(jobs => [...jobs, jobs[jobs.length - 1] + 1]);
  }

  const handleSkills = () => {
    setSkills(skills => [...skills, skills[skills.length - 1] + 1]);
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

  const renderResume = () => {
    ReactDOM.render(<SecondComponent info = {info} />, document.getElementById("root"))
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
        <TextField style={{"margin": "10px"}} multiline id="outlined-basic" label="University Name" variant="outlined"/>
        <TextField style={{"margin": "10px"}} multiline id="outlined-basic" label="University Location" variant="outlined"/> <br></br>
        <TextField style={{"margin": "10px"}} multiline id="outlined-basic" label="Degree" variant="outlined"/> <br></br>
        <TextField style={{"margin": "10px"}} multiline id="outlined-basic" label="Field of Study" variant="outlined"/>
        <TextField style={{"margin": "10px"}} multiline id="outlined-basic" label="Expected Graduation" variant="outlined"/>
        </form>
        <form style={{"margin": "100px", "padding": "5px"}}>
        <h1>Now let's fill out your work history</h1>
        <p>Employers scan your resume to see if you're a match for the role. Include relevant work experience, and descriptions of your work.
          Bullet points for action points are not required, but highly recommended!
        </p>

        {jobs.map(function (job) {
          return (
            <div>
              <p style={{"margin": "10px", "margin-top": "30px"}}>Work Experience #{job}</p>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id="outlined-basic" label="Title" variant="outlined"/>
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id="outlined-basic" label="Organization" variant="outlined"/> <br></br>
              <TextField style={{"margin": "10px"}} id="outlined-basic" label="Location" variant="outlined"/> <br></br>
              <TextField style={{"margin": "10px"}} id="demo-simple-select-label" label="Start Date" variant="outlined"/>
              <TextField style={{"margin": "10px"}} id="demo-simple-select-label" label="End Date" variant="outlined"/>
              <FormControlLabel style={{"margin": "10px"}} control={<Checkbox />} label="I currently work here" /> <br></br>
              <TextField InputProps={{ sx: { width: 500, height: 100} }} style={{"margin": "10px"}} multiline id="outlined-basic" label="Action Points" variant="outlined"/>
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
              <TextField InputProps={{ sx: { width: 500 } }} style={{"margin": "10px"}} multiline id="outlined-basic" label="Title" variant="outlined"/>
            </div>
          )
        })}
        <Button style={{"margin": "10px"}} variant="outlined" color="success" onClick={() => handleSkills()}>+</Button> <br></br>
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
        />
        </form>

        <Button style={{"margin": "10px", "margin-left": "50%", "margin-bottom": "5%"}} variant="outlined" color="success" onClick={()=>renderResume()}>Resumake!</Button> 

      </div>
    )
}

export default EnterInformation;