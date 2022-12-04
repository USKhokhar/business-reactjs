import React from 'react'
import Sidebar from './Sidebar'
// import axios from 'axios'
// import Item from './Item'
// import {useEffect, useState} from 'react'

function Clients() {
    // const [value, setValue] = useState([])

    // const api = async() => {
    //     const res = await axios.get('https://reqres.in/api/users?page=1')
    //     setValue(value.res)
    // }

    // useEffect(() => {
    //     api()
    // }, [])
  return (
    <section>
        <Sidebar />
        <main>
            <h1>Our Clients</h1>
{/* 
            {
                value.map((client) => {
                    const {page} = client
                    return(
                        <Item 
                        title={page}
                        />
                    )
                })
            } */}
        </main>
    </section>
  )
}

export default Clients