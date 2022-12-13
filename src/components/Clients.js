import { Card, CardActions, Grid, Button } from '@mui/material';
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import Item from './Item';
import Sidebar from './Sidebar'

function Clients() {

  const [client, setClient] = useState()

  useEffect(() =>{
    axios.get('https://reqres.in/api/users?page=1')
          .then((res) => {
            setClient(res.data)
          })
  }, [])
  
  return (
    <div>
        <Sidebar />
        <main>
            <h1>Our Clients</h1>

           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
          padding: '25px',
          gap: '10px',
          margin: 'auto'
        }}>
             {
              [...client.data].map((props) => {
                const {first_name, last_name, email, avatar} = props;

                return (
                  <Card sx={{maxWidth: 245}}>
                     <Item 
                  title={first_name + ' ' + last_name}
                  image ={avatar}
                  subTitle={email}
                  />
                    <CardActions>
                      <Button size="small" variant='outlined'>know more</Button>
                      <Button size="small" variant='contained'>contact</Button>
                    </CardActions>
                  </Card>
                )
              })
            }
           </Grid>

        </main>
    </div>
  )
}

export default Clients