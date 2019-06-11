import React, { Component } from 'react'
import { searchRepos } from '../../api/GithubAPI'
import SearchForm from '../SearchForm/SearchForm'
import SearchResultsTable from '../SearchResults/SearchResultsTable'

class SearchContainer extends Component {

    searchRepos = (keywords, stars, license, includeForked) => {
        const repos = searchRepos(keywords, stars, license, includeForked)
    }

    componentDidMount() {
        searchRepos("tetris", ">1000", "MIT", "true")
    }

    render() {
        return (
            <div>
                <SearchForm searchRepos={this.searchRepos}/>
                <SearchResultsTable />
            </div>
        )
    }

}

export default SearchContainer