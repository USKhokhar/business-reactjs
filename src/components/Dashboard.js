import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Item from './Item'
import './dashboard.css'
import axios from 'axios'
import { Grid, Button, CardActions, Card } from '@mui/material'

function Dashboard() {

  const [prod, setProd] = useState([])

  const api = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProd(response.data)
  }

  useEffect(() => {
    api()
  }, []);

  let wishArray = []
  
  const wishlistHandler = (e) => {
    console.log(e.target.value);
    wishArray.push(e.target.value)
    console.log(wishArray)
    localStorage.setItem('list', JSON.stringify(wishArray))
    console.log(localStorage.getItem('list'))
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
                    <Card sx={{maxWidth: 245}} key={id}>
                      <Item 
                      title={title}
                      image={image}
                      subTitle={ '₹ '+price}
                      />        
                      <CardActions>
                        <Button size="small" variant='outlined' onClick={wishlistHandler} value={id}>Add To Whislist</Button>
                        <Button size="small" variant='contained'>Buy Now</Button>
                      </CardActions>
                    </Card>
                  )
                })
              }
            </Grid>
        </main>
    </>
  )
}

export default Dashboard