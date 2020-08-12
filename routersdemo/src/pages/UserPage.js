import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Text from '../Atoms/Text/Text.js'


export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }


  const [user, setUser] = useState({
    id: "manohar",
    name: "manohar",
    location:"Hyderabad",
    age: 21,
    blog: "https://github.com/manohar1818",
    followers: 0
  });


  //const [user, setUser] = useState(initialUserState)
  /*
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

      //setUser(data)
    }

    getUser()
  }, [props.match.params.id])
  */



  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      {/*<h1>{props.match.params.id}</h1>*/}
      <Text text={props.match.params.id} type = "heading" />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}