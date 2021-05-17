import React from 'react'
import PropTypes from 'prop-types'

function Results({results}) {
    return (
        <div>
            <h1>Request Results:</h1>
            <p>{JSON.stringify(results)}</p>
            
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.any.isRequired

}

export default Results


