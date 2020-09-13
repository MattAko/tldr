import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TrendItem extends Component {
    getStyle = (bg) => {
        return {
            backgroundImage: bg,
            backgroundSize: 'cover',
            backgroundPosition: 'center -50px',
            borderRadius: "10px",
            width: '400px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px',
            fontWeight: 'bold',
            fontSize: '24px',
            textTransform: 'uppercase'
        }
    }

    render() {
        const {id, title, bg} = this.props.trend
        return (
            <div style = {this.getStyle(bg)}>
                {title}
            </div>
        )
    }
}

// Prop Types
TrendItem.propTypes = {
    trend: PropTypes.object.isRequired
}

export default TrendItem
