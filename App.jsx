import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GeneralInfo } from './GeneralInfo'
import { Preview } from './Preview'
import { EducationInfo } from './EducationInfo'
function App() {
  
  const [details,setDetails] = useState({name:"",email:"",phone:"",linkedin:""})
  const [education,setEducation] = useState({name:"",degree:"",city:"",state:"",startDate:"",endDate:""})
  const handleName = (e)=> {
    setDetails({...details,name:e.target.value})
  }

  function handleEmail(e){
    setDetails({...details,email:e.target.value})
  }

  function handlePhone(e){
    setDetails({...details,phone:e.target.value})
  }

  function handleLink(e){
    setDetails({...details,linkedin:e.target.value})
  }

  function handleName1(e) {
    setEducation({...education,name:e.target.value})
  }

  function handleDegree(e){
    setEducation({...education,degree:e.target.value})
  }

  function handleCity(e){
    setEducation({...education,city:e.target.value})
  }

  function handleState(e) {
    setEducation({...education,state:e.target.value})
  }

  function handleStartDate(e){
    setEducation({...education,startDate:e.target.value})
  }

  function handleEndDate(e){
    setEducation({...education,endDate:e.target.value})
  }
  return (
    <div style={{display:"inline-grid", gridTemplateColumns:"1fr 1fr", width:'100%',height:'100vh', border:'1px solid black'}}> 
      <div style={{textAlign:"center"}}>
        <h3>General Information</h3>
        <GeneralInfo details={details} handleName={handleName} handleEmail={handleEmail} handlePhone={handlePhone} handleLink={handleLink}/>
        <h3>Education Info</h3>
        <EducationInfo education={education} handleName1={handleName1} handleDegree={handleDegree} handleCity={handleCity} handleState={handleState} handleStartDate={handleStartDate} handleEndDate={handleEndDate}></EducationInfo>
      </div>
      <div style={{textAlign:"center", borderLeft:"1px solid black"}}>
        <h3>{details.name}</h3>
        <div style={{display:"inline"}}>
          <Preview details={details} education={education}/>
        
        </div>
      </div>
    </div>
  )
}

export default App
