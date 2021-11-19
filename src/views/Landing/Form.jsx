import React from 'react'

// PRESENTATIONAL COMPONENT
export default function Form(props) {
  return (
    <form className="formContainer" onSubmit={props.onSubmitHandle}>

      <label htmlFor="username">Username</label>
      <input type="text" id="username" 
             value={props.userName} onChange={props.onChangeUserName}/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" 
             value={props.email} onChange={props.onChangeEmail}
             style={props.redBorder ? {border: "solid 5px red"} : null } 
      />

      <label htmlFor="date">Date</label>
      <input type="date" id="date" 
             value={props.date} onChange={props.onChangeDate}
      />

      <label htmlFor="file">File</label>
      <input type="file" id="file" 
             file={props.file} onChange={props.onChangeFile}
      />

      <button type="submit" >submit</button>
    </form>
  )
}
