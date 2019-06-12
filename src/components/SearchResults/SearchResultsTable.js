import React from 'react'
import Repo from '../Repo/Repo'

const SearchResultsTable = ({ repos }) => {
    const repoItems = repos.map(repo => <Repo repo={repo}/>)

    return (
        <div>{repoItems}</div>
    )
}

export default SearchResultsTable

