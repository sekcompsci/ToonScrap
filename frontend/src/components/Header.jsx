import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorite'>Favorite</Link></li>
                    <li><Link to='/chapters'>Chapters</Link></li>
                    <li><Link to='/pages'>Pages</Link></li>
                    <li><Link to='/pageall'>PagesAll</Link></li>
                </ul>
            </nav>
        </header>
    )
  }
}