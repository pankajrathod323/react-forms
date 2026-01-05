import { useState } from "react"

export function CommentForm(){

 let [formData, setFormData] = useState({
  username:"",
  remark:"",
  rating:""
 })

 let handleInputChange = (event) =>{
  setFormData((currData)=>{
     return { ...currData, [event.target.name]:event.target.value}
  });
 }

 let handleSubmit = (event) => {
  event.preventDefault();
   console.log(formData);
   setFormData({
    username:"",
    remark:"",
    rating:""
   });
 }

  return(
    <div>
       <h1>Comment From </h1>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
           <input type="text"
            id="username"
            placeholder="username" 
            name="username"
            value={formData.username}
            onChange={handleInputChange}
             />
             <br /><br />
          <label htmlFor="remark">Remark</label>
            <textarea 
             id="remark"
             placeholder="remark"
             name="remark"
             value={formData.remark}
             onChange={handleInputChange}
             ></textarea>
             <br /><br />

          <label htmlFor="rating">Rating</label>
            <input type="number"
             id="rating"
             placeholder="Enter Rating"
             name="rating"
             value={formData.rating}
             onChange={handleInputChange} />

             <button type="submit">Enter Comment</button>
       </form>
    </div>
  )
}