import React from 'react'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div className='home-btn'>
        <Button variant='contained'
        onClick={
            () => {
                navigate('/Login')
            }
        }

        fullWidth
        >
            LOG IN
        </Button>
    </div>
  )
}

export default Home