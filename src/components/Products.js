import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
import Item from './Item'

function Products(props) {

    
    const {heading, url} = props

    const [data, setData] = useState([])

    const dataApi = async () => {
        const response = await axios.get(url)
        setData(response.data)
    }

    useEffect(() =>{
        dataApi()
    }, [data])

  return (
    <>
        <Sidebar />

        <main>
            <h1>
                {heading}
            </h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
          padding: '25px',
          gap: '10px',
          margin: 'auto'
        }}>
              {
              data.map((items) => {
                  return(
                    <Item 
                    title={items.title}
                    image={items.image}
                    subTitle={ '₹ '+items.price}
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

export default Products