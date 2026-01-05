import { useState } from "react"

export function Form() {
 
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password:""
  });
  let handleInputChange = (event) => {
     let fieldName = event.target.name;
     let fieldData = event.target.value;

     setFormData((currdata) => {
      return {...currdata, [fieldName]: fieldData}
     })
 
  }
 let handleSubmit = (event) => {
   event.preventDefault();
   console.log(formData);
   setFormData({
    fullName:"",
    username:"",
    password:""
   })
 }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="fullName">FullName</label>
        <input type="text" placeholder="enter full name" 
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName" />
          
          <br /><br /><br />
        <label htmlFor="username">username</label>
        <input type="username" placeholder="enter full name" 
          value={formData.username}
          id="username"
          onChange={handleInputChange} 
          name="username"/>

          <br /><br /><br />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="Enter password" 
          value={formData.password}
          id="password"
          onChange={handleInputChange} 
          name="password"/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}