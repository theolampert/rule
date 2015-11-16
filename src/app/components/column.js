import React from 'react';

class Column extends React.Component {
	render(){
		let style = {
			marginLeft: this.props.first ? this.props.gutter : (this.props.gutter / 2),
			marginRight: this.props.last ? this.props.gutter : (this.props.gutter / 2),
			borderLeft: `${this.props.width}px ${this.props.line} ${this.props.color}`,
			borderRight: `${this.props.width}px ${this.props.line} ${this.props.color}`
		};

		if(this.props.gutter === 0) style.borderRight = '0px';
		if(this.props.first && this.props.gutter === 0) style.borderLeft = '0px';

		return(
			<div className='rule-column' style={style}></div>
		);
	}
};

export default Column;