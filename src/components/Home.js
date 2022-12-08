import React from 'react'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import './Home.css'

function Home() {
    const navigate = useNavigate()
  return (
    <div className='rel-full-lay'>
        <h1>WELCOME TO SHOPCART</h1>
        <Button variant='contained'
        onClick={
            () => {
                navigate('/Login')
            }
        }

        className='center-lay'
        >
            LOG IN
        </Button>
    </div>
  )
}

export default Home