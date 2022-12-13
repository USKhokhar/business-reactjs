import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Grid, CardActions, Button, Card } from '@mui/material'
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
                    <>
                      <Card sx={{maxWidth: 245}}>
                      <Item 
                      title={items.title}
                      image={items.image}
                      subTitle={ '₹ '+items.price}
                      />        
                      <CardActions>
                        <Button size="small" variant='outlined' onClick={items.wishlistHandler} value={items.id}>Add To Whislist</Button>
                        <Button size="small" variant='contained'>Buy Now</Button>
                      </CardActions>
                    </Card>
                    </>
                  )
                })
              }
            </Grid>
        </main>
    </>
  )
}

export default Products