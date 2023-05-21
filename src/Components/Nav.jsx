import React from 'react'
import { Link } from 'react-router-dom'

function Nav({}) {
  return (
    <div>
    <>
      <nav>
        <ul>
          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>
    </>
    </div>
  )
}

export default Nav