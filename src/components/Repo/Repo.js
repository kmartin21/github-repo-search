import React from 'react'

const Repo = ({ repo }) => (
    <div>
        <a href={repo.html_url}>{repo.full_name}</a>
        <li>{repo.description}</li>
        <li>Stars: {repo.stargazers_count}</li>
        <li>License: {repo.license.name}</li>
        {repo.fork &&
            <li>forked</li>
        }
        ---------------------------------------
    </div>
)

export default Repo