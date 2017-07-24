import React from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    state = {
        storys: []
    }

    componentDidMount() {
        fetch('/api/storys')
            .then((response) => response.json())
            .then((storys) => this.setState({ storys }))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.storys.map((story) => (
                            <tr key={story.name}>
                                <th>{story.name}</th>
                                <td>{story.img}</td>
                                <td><Link to={`/chapters/${story.link}`} params={ name: ${story.link}  }>{story.name}</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}