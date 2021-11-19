import React,{useState} from 'react'
import Form from './Form';

/* 
1. Create a state variable for the input to control. And add the default value in the useState().
2. Create an onchangeHandling function to control the logic of the event when the input changes. The function will always receive the event object from the input.
3. Assign 2 attributes to the input. First the value should be equal to the state variable. Second add the onChange and assign the onchangeHandling function to it.
*/
// CONTROLLING COMPONENT
export default function Landing() {

  const [userName, setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [date,setDate] = useState('');
  const [file,setFile] = useState('');

  // extra feature - input border
  const [redBorder, setRedBorder] = useState(false);
  //

  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const onChangeEmail = (e) => {
    setRedBorder(e.target.value.includes("@") ? false : true)
    setEmail(e.target.value)
  }

  const onChangeDate = (e) => {
    // With input types date we can obtain the value (yyyy-mm-dd) or the valeAsNumber which is the date in milliseconds
    setDate(e.target.value)
  }

  const onChangeFile = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmitHandle = (e) =>{
    e.preventDefault();
    console.log(userName,email,date,file);
  }

  return (
    <div>
      <h1>Landing</h1>
      <Form userName={userName} onChangeUserName={onChangeUserName} 
          email={email} onChangeEmail={onChangeEmail}
          redBorder={redBorder}
          date={date} onChangeDate={onChangeDate}
          file={file} onChangeFile={onChangeFile}
          onSubmitHandle={onSubmitHandle}
      />
    </div>
  )
}
