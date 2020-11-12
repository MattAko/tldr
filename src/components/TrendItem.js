import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TrendItem extends Component {
    getStyle = (bg) => {
        return {
            backgroundImage: bg,
            backgroundSize: 'cover',
            backgroundPosition: 'center -50px',
            borderRadius: "10px",
            border: 'solid 1px #656565',
            width: '400px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px',
            fontWeight: 'bold',
            textTransform: 'lowercase',
            fontStyle: 'italic',
            color: 'white'
        }
    }

    render() {
        const {title, bg} = this.props.trend
        return (
            <div onClick={this.props.search.bind(this, title)} className="card" style={this.getStyle(bg)}>
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
