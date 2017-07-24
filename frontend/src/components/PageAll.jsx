import React from 'react'
import fetch from 'isomorphic-fetch'

export default class PageAll extends React.Component {
    state = {
        pageAll: []
    }

    componentDidMount() {
        fetch('/api/pageall/boku_no_hero_academia/15')
            .then((response) => response.json())
            .then((pageAll) => this.setState({ pageAll }))
    }

    render() {
        return (
            <table className='table'>
                <tbody>
                    {
                        this.state.pageAll.map((page) => (
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