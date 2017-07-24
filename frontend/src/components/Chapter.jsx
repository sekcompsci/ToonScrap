import React from 'react'
import fetch from 'isomorphic-fetch'

export default class Chapters extends React.Component {
    state = {
        chapters: []
    }

    componentDidMount(props) {
        fetch('/api/chapters/')
            .then((response) => response.json())
            .then((chapters) => this.setState({ chapters }))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.chapters.map((chapter) => (
                            <tr key={chapter.name}>
                                <th>{chapter.name}</th>
                                <td>{chapter.link}</td>
                                <td>{chapter.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}