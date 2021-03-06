import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ searchRepos }) => (
    <div>
        <form onSubmit={() => searchRepos("tetris", ">500", "MIT", "true")}>
            <label>
                Text
                <input type="text" name="text" />
            </label>
            <label>
                Stars
                <input type="text" name="stars" />
            </label>
            <label>
                License
                <select name="license">
                    <option value="MIT">MIT</option>
                    <option value="ISC">ISC</option>
                    <option value="Apache">Apache</option>
                    <option value="GPL">GPL</option>
                </select>
            </label>
            <label>
                <input type="checkbox" name="forked" />
                Include forked
            </label>
            <input type="submit" value="SEARCH"/>
        </form>
    </div>
)

SearchForm.propTypes = {
    searchRepos: PropTypes.func
}

export default SearchForm