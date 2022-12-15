import { Card, CardActions, Grid, Button } from '@mui/material';
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import Item from './Item';
import Sidebar from './Sidebar'

function Clients() {

  const [clients, setClients] = useState(null);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
    .then((res) => {
      setClients(res.data);
    });
  }, []);
  
  const clientArr = (clients.data)
  
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
            clientArr.map((item) => {
              const {first_name, last_name, avatar, email} = item
              console.log(1);
              return (
                <Card>
                  <Item 
                  title={first_name + ' ' + last_name}
                  subTitle={email}
                  image={avatar}
                  />
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