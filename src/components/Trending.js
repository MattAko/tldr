import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TrendItem from './TrendItem.js'

export class Trending extends Component {
    render() {
        return this.props.trending.map((trend) => (
            <TrendItem key={trend.id} trend={trend} search={this.props.search}/>
        ));
    }
}

// Prop Types
Trending.propTypes = {
    trending: PropTypes.array.isRequired
}

export default Trending
