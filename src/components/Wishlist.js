import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import Item from './Item'
import { Grid, Card, CardActions, Button } from '@mui/material'

function Wishlist() {

  const [wish, setWish] = useState([])

  const getWish = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setWish(res.data)
  }

  useEffect(() => {
    getWish()
  }, [])


  // const wishArray = JSON.parse(localStorage.getItem('list'))
  // // console.log(wishArray);
  // const wishArray = Array(localStorage.getItem('list'))
  // console.log(wishArray)
  // console.log(Array(localStorage.getItem('list')))
  const wishArray = JSON.parse((localStorage.getItem('list')))
  console.log(wishArray);
  

  // console.log(wish[0].id);
  
  // console.log(wishArray)
  // localStorage.getItem('list').forEach((x) => console.log(x))

  

  return (
    <section>
        <Sidebar />
        <main>
            <>
              <h1>Wishlist</h1>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
                padding: '25px',
                gap: '10px',
                margin: 'auto'
              }}>
                {
                  wish.map((item) => {
                    if(wishArray.includes(JSON.stringify(item.id))){
                      return(
                        <Card sx={{maxWidth: 245}}>
                          <Item 
                          title={item.title}
                          image={item.image}
                          subTitle={ '₹ '+item.price}
                          />
                        </Card>
                      )
                    } 
                  })
                }
              </Grid>
            </>
        </main>
    </section>
  )
}

export default Wishlist