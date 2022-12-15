import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Item from './Item'
import './dashboard.css'
import axios from 'axios'
import { Grid, Button, CardActions, Card } from '@mui/material'
import { ToastContainer, toast} from 'react-toastify'

function Dashboard() {

  const [prod, setProd] = useState([])
  
  const api = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProd(response.data)
  }
  
  useEffect(() => {
    api()
  }, []);
  
  let wishArray;

  if(localStorage.getItem('list')){
    wishArray = JSON.parse(localStorage.getItem('list'))
  } else{
    wishArray = []
  }

  const [buttonText, setBtnText] = useState('Add To Wishlist')
  
  const wishlistHandler = (e) => {
    console.log(e.target.value);
    wishArray.push(e.target.value)
    console.log(wishArray)
    localStorage.setItem('list', JSON.stringify(wishArray))
    console.log(localStorage.getItem('list'))
    toast('Item Added to wishlist!',
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })

    // localStorage.setItem('list', JSON.stringify(Array.push(e.target.value)))
    // console.log(JSON.stringify(Array.push(e.target.value)));
  }

  return (
    <>
        <Sidebar />
        <main>
            <h1>Dashboard</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
              padding: '25px',
              gap: '10px',
              margin: 'auto'
            }}>
              {
              prod.map((items) => {
                const {title, image, price, id} = items;

                return(
                    <Card sx={{maxWidth: 245}}>
                      <Item 
                      title={title}
                      image={image}
                      subTitle={ '₹ '+price}
                      />        
                      <CardActions>
                        <Button size="small" variant='outlined' onClick={wishlistHandler} value={id}>{buttonText}</Button>
                        <Button size="small" variant='contained'>Buy Now</Button>
                      </CardActions>
                    </Card>
                  )
                })
              }
            </Grid>

            <ToastContainer />
        </main>
    </>
  )
}

export default Dashboard