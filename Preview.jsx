import React from 'react'

export const Preview = (props) => {
  return (
    <div>
      <div>
        <pre> <span style={{textDecoration:"underline black "}}>{props.details.email}</span> {props.details.email ? "|": " "}  {props.details.phone} {props.details.phone ? "|": " "} <span style={{textDecoration:"underline black"}}>{props.details.linkedin}</span></pre>
      </div>
      <div>
        <h3 style={{width:"90%", fontWeight:"500",textAlign:"left",marginLeft:"5%", borderBottom:"1px solid black"}}>Education</h3>
        <div style={{display:"flex",justifyContent:"space-between",fontWeight:'600',width:'90%',border:"1px solid black"}}>{props.education.name} {props.education.city}</div>
        <div style={{textAlign:'left',marginLeft:"3.7rem",fontWeight:'100',fontSize:'12px'}}>{props.education.degree}</div>

      </div>
    </div>
  )
}
