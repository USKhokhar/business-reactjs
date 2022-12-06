import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Item from './Item'
import './dashboard.css'
import axios from 'axios'
import { Grid } from '@mui/material'

function Dashboard() {

  const [data, setData] = useState([])

  const api = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
  } 

  useEffect(() => {
    api()
  }, []);


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
              data.map((items) => {
                const {title, image, price} = items;
                  return(
                    <Item 
                    title={title}
                    image={image}
                    subTitle={price}
                    btn='Add To Wishlist'
                    fillBtn='Buy Now'
                    />
                  )
                })
              }
            </Grid>
        </main>
    </>
  )
}

export default Dashboard