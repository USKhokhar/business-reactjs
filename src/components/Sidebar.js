import React from 'react'
import './sidebar.css'
import {Stack, Button, Grid} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Sidebar() {

  const catData = [
    {
      'loc': "/products/electronics",
      'cat': "electronics"
    },
    {
      'loc': "/products/jewelry",
      'cat': "jewelry"
    },
    {
      'loc': "/products/men-clothing",
      'cat': "men's clothing"
    },
    {
      'loc': "/products/women-clothing",
      'cat': "women's clothing"
    }
  ]

  const navigate = useNavigate()

  const handleNavigate = (e) => {
    navigate(e.target.value);
    console.log(e.target.value);
  }

  const extraStyle = {
    outline: 'none',
    borderRadius: '4px',
    border: '1px solid #1976d2',
    font: 'normal 200 12.25px/22px sans-serif',
    color: '#1976d2', 
    textAlign: 'center',
    letterSpacing: '0.35px',
    padding: '5px 15px',
    textTransform: 'uppercase'
  }



  return (
    <nav>
        <h1>BUSINESS NAME</h1>
        <Stack spacing={2}>
            <Button variant='outlined' onClick={() => navigate('/Dashboard')}>Home</Button>
            <select name="product-menu" id="product-menu" onChange={handleNavigate} style={extraStyle}>
              <option className='option' value="products">All Products</option>
              {
                catData.map((props) => {
                  const {loc, cat} = props
                  return (
                    <option className='option' value={loc}>{cat}</option>
                  )
                })
              }
            </select>
            <Button variant='outlined' onClick={() => navigate('/Wishlist')}>Wishlist</Button>
            <Button variant='outlined' onClick={() => navigate('/AboutUs')}>About Us</Button>
            <Button variant='outlined' onClick = {() => navigate('/Clients')}>Clients</Button>
            <Button variant='contained' 
                    onClick={() => {
                      navigate('/Login')
                      localStorage.clear()
                      }
                    }>
                      LOG OUT</Button>
        </Stack>
        
        <Grid container style={{margin: 'auto'}}>
          <a href='https://facebook.com' target='_blank' rel="noreferrer">
              <FacebookIcon style={{
                fontSize: '42px'
              }}/>
          </a>
          <a href='https://github.com/USKhokhar' target='_blank' rel="noreferrer">
              <GitHubIcon style={{
                fontSize: '42px'
              }}/>
          </a>
          <a href='https://linked.com' target='_blank' rel="noreferrer">
              <LinkedInIcon style={{
                fontSize: '42px'
              }}/>
          </a>
        </Grid>

    </nav>
  )
}

export default Sidebar