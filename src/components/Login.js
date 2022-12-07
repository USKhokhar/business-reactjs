import React, { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material'
// import './Login.css'
import ForgotPass from './ForgotPass'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const [input, setInput] = useState('')
  
  const inputData = {
    userName: name,
    password: pass
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput([inputData])
    navigate('/Dashboard')
    toast(`Welcome ${ [inputData.userName]}`,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
    )
    console.log([inputData])
    console.log(JSON.stringify([inputData.userName]))
  }


  return (
    <section>
      {/* <pre>
        Username: {name}
        <br/>
        Password: {pass}
      </pre> */}
      <h1>Login Page</h1>
      <form onSubmit = {handleSubmit}>
        <FormControl>
          <TextField id='username' label='Username' placeholder='Enter Username' required
          value={name}
          onChange = {
            (e) => {
              setName(e.target.value)
            }
          }
          />

          <TextField id='password' label='Password' placeholder='Enter Password' type='Password' required
          value={pass}
          onChange = {
            (e) => {
              setPass(e.target.value)
            }
          }
          />

          <ForgotPass />

          <Button variant= 'contained' type='submit'>LOG IN</Button>
        </FormControl>
      </form>

    </section>
  )
}
