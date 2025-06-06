import React from 'react'

export const GeneralInfo = (props) => {
  return (
    <div>
        <form method='get'>
            <div>
                <label>Name: </label>
                <input type='text' onChange={props.handleName} value={props.details.name} />
            </div>
            <div>
                <label>Email: </label>
                <input type='email' onChange={props.handleEmail} value={props.details.email}/>
            </div>
            <div>
                <label>Phone: </label>
                <input type='tel' onChange={props.handlePhone} value={props.details.phone}/>
            </div>
            <div>
                <label>LinkedIn: </label>
                <input type='text' onChange={props.handleLink} value={props.details.linkedin}/>
            </div>
        </form>
    </div>
  )
}
