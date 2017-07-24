import React from 'react'
import fetch from 'isomorphic-fetch'

export default class Pages extends React.Component {
    state = {
        pages: []
    }

    componentDidMount() {
        fetch('/api/pages/boku_no_hero_academia/15/1')
            .then((response) => response.json())
            .then((pages) => this.setState({ pages }))
    }

    render() {
        return (
            <table className='table'>
                <tbody>
                    {
                        this.state.pages.map((page) => (
                            <tr key={page.img}>
                                <td><img src={page.img}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}