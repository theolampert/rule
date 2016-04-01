import React from 'react';
import Column from './column.js';

class RulerOverlay extends React.Component {

	renderColumns(){
		let cols = [];
		for (var i = 0; i < this.props.grid.colNum; i++) {

			let order = {
				first: false,
				last: false
			};

			if(i === 0) order.first = true;
			if(i === this.props.grid.colNum - 1) order.last = true;
			cols.push(
				<Column
					first={order.first}
					last={order.last}
					key={i}
					color='#00EAFF'
					line='dotted'
					width={1}
					gutter={this.props.grid.gutter > 0 ? this.props.grid.gutter : 0}
					/>
				);
		};
		return cols;
	}

	render(){
		var styles = {
			maxWidth: this.props.grid.width > 0 ? this.props.grid.width : '100%',
		}
		return (
			<div className='rule-grid' style={styles}>
				{this.renderColumns()}
			</div>
		)
	}
}

export default RulerOverlay;
