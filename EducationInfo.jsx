import React from 'react'

export const EducationInfo = (props) => {
  return (
    <div>
        <form>
            <div>
                <label>University Name: </label>
                <input type='text' value={props.education.name} onChange={props.handleName1}></input>
            </div>
            <div>
                <label>Degree:</label>
                <input type='text' value={props.education.degree} onChange={props.handleDegree}></input> 
            </div>
            <div>
                <label>City:</label>
                <input type='text' value={props.education.city} onChange={props.handleCity}></input>
            </div>
        </form>
    </div>
  )
}
 
