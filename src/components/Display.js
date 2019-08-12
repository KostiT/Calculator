import React, { Component } from 'react'

export default class Display extends Component {
	render() {
		let {result} = this.props
		return (
			<div>
				<h1>{result}</h1>
			</div>
		)
	}
}
