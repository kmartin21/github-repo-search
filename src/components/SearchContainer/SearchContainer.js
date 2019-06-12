import React, { Component } from 'react'
import { searchRepos } from '../../api/GithubAPI'
import SearchForm from '../SearchForm/SearchForm'
import SearchResultsTable from '../SearchResults/SearchResultsTable'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

class SearchContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            repos: []
        }
    }

    searchRepos = (event, keywords, stars, license, includeForked) => {
        event.preventDefault()
        searchRepos(keywords, stars, license, includeForked)
        .then(repos => this.setState({ repos }))
        .catch(error => alert(error.message))
    }

    componentDidMount() {
        // https://api.github.com/search/repositories?q=tetris+stars:%3E500+license:MIT+fork:true
        const query = queryString.parse(this.props.location.search)
        const querySplit = query.q.split(":")
        console.log(query)
        console.log("SPLIT:", querySplit)
    }

    render() {
        return (
            <div>
                <SearchForm searchRepos={this.searchRepos}/>
                <SearchResultsTable repos={this.state.repos}/>
            </div>
        )
    }

}

export default withRouter(SearchContainer)