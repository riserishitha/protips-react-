import { useState } from "react";
function Register(){
    const[Name,setName]=useState(false);
    const[initial,setinitial]=useState(false);
    const[mailId,setmailId]=useState(false);
    const[contactNo,setcontactNo]=useState(false)
    const[error,seterror]=useState(false)
    const[completed,Setcompleted]=useState(false)
    const [state,setState] = useState({
        firstname : "",
        lastname: "" ,
        email: "",
        phoneno: "",
    })

const handleChange = (event) => {
    const inputValue = event.target.value
    const inputField = event.target.name
    setState({...state, [inputField]: inputValue})
}

    const handleSubmit = (event) => {
        event.preventDefault();
        const {firstname,lastname,email,phoneno} = state; 
        if(email === "" || phoneno === "" || email.includes(" ")){
            seterror(true)
            return;
       }
       if(firstname === ""){
        return setName(true)
       }
       if(lastname === ""){
        return setinitial(true)
       }
       if(phoneno.length !== 10){
        return setcontactNo(true)
       }
       if(!email.includes("@kalvium.community")){
        return setmailId(true)
       }

       let symbols = './,<>:;[]{}-=+*!@#$%^&*()|~Ee';
       for(let i=0; i<10; i++){
        if(symbols.includes(phoneno[i])){
            return setcontactNo(true)
        }
       }

       let EmailName = email.split("@kalvium.community")[0];

       let smallLetters = "abcdefghijklmnopqrstuvwxyz.";
       for(let i=0; i<EmailName.length; i++){
        if(!smallLetters.includes(EmailName[i])){
            return setmailId(true)
        }}Setcompleted(true)
    }
    return(
            <div className="main">
            <div>
            {completed === true ? (
              <div className="register">
           <p>Registration completedfull</p>
           </div>) : (' ')}
            
<form onSubmit={handleSubmit}>
    <div>
    <input id="inpbox" type="text" placeholder="Name" name="firstname" onChange={handleChange}/>
    {Name === true ? (
            <p style={{ color: 'red', fontSize: '15px' }}>Do not keep FirstName empty!!</p>
        ) : ("")}
    </div>
   <div>
   <input id="inpbox" type="text" placeholder="Last Name" name="lastname" onChange={handleChange} />
   {initial === true ? (
        <p style={{ color: 'red', fontSize: '15px' }}> Do not keep Lastname empty!!
        </p>
    ) : ("")}
   </div>
   <div>
   <input id="inpbox" type="email" placeholder="Email" name="email" onChange={handleChange} />
   {mailId === true ? (
    <p style={{ color: 'red', fontSize: '15px' }}>Enter correct format for email</p>
    ) : ( '' )}
   </div>
<div>
<input id="inpbox" type="number" placeholder="Phone number" name="phoneno" onChange={handleChange} maxLength={10}/>
{contactNo === true ? (
<p style={{ color: 'red', fontSize: '15px' }}> Enter correct format for phone</p>
  ) : ('')}
</div>
{error === true ? (
        <p>Enter input fields correctly!!</p>
    ) : ("")
}
<input type="submit" className="int"/>
</form>
</div>
</div>
)}

export default Register;