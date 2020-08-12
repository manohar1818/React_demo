import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../Atoms/Text/Text.js'


export default function HomePage() {
  return (
    <div className="container">
      {/*<h1>Home Page</h1>*/}
      <Text text="Home Page" type = "heading" />
      <p>
        <Link to="/manohar">manohar</Link> on GitHub.
      </p>
    </div>
  )
}