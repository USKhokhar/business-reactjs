import React from 'react'
import './sidebar.css'
import {Stack, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  return (
    <nav>
        <h1>BUSINESS NAME</h1>
        <Stack spacing={2}>
            <Button variant='outlined' onClick={() => navigate('/Dashboard')}>Home</Button>
            <Button variant='outlined'>Products</Button>
            <Button variant='outlined' onClick={() => navigate('/Wishlist')}>Wishlist</Button>
            <Button variant='outlined' onClick={() => navigate('/AboutUs')}>About Us</Button>
            <Button variant='outlined' onClick = {() => navigate('/Clients')}>Clients</Button>
            <Button variant='contained' onClick={() => navigate('/Login')}>LOG OUT</Button>
        </Stack>
    </nav>
  )
}

export default Sidebar