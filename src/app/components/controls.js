import React from 'react';
import Draggable from 'react-draggable';
import RulerOverlay from './ruler-overlay.js';

class Controls extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			width: 0,
			colNum:0,
			gutter:0
		}
	}

	handleWidthChange(event){
		this.setState({
			width: parseInt(event.target.value)
		})
	}

	handleColNumChange(event){
		this.setState({
			colNum: parseInt(event.target.value)
		})
	}
	handleGutterChange(event){
		this.setState({
			gutter: parseInt(event.target.value)
		})
	}

	render(){

		let displayString = this.props.visible ? 'block' : 'none';

		return (
			
			<div style={{display:displayString}} className="rule">
				<Draggable>
					<div className="rule-container">
						<svg className="close-icon" x="0px" y="0px"
							 width="10px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
						<path d="M12.8,10l6.6-6.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L10,7.2L3.4,0.6c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8
							L7.2,10l-6.6,6.6c-0.8,0.8-0.8,2,0,2.8C1,19.8,1.5,20,2,20s1-0.2,1.4-0.6l6.6-6.6l6.6,6.6C17,19.8,17.5,20,18,20s1-0.2,1.4-0.6
							c0.8-0.8, 0.8-2,0-2.8L12.8,10z"/>
						</svg>
						<label>Grid Max Width</label>
						<input type="number" onChange={this.handleWidthChange.bind(this)}></input>
						<label>Columns</label>
						<input type="number" onChange={this.handleColNumChange.bind(this)}></input>
						<label>Gutter</label>
						<input type="number" onChange={this.handleGutterChange.bind(this)}></input>
						<button className="rule-btn-add-breakpoint">Add Breakpoint</button>
					</div>
				</Draggable>
				<RulerOverlay grid={this.state}/>
			</div>
			
		)
	}
}

export default Controls;