import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>This a small blog app. It will fetch posts from an API.</h1>
    <p>Welcome Manohar Reddy.</p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </section>
)

export default DashboardPage
