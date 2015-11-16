import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './components/controls.js';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: true
		}
	}

	componentDidMount(){
		var ctrlKey = false;
		document.addEventListener('keydown', (event) => {
			if(event.keyCode == 18) {
				ctrlKey = true;
			}
			if(ctrlKey && event.keyCode == 186) {
				this.setState({
					visible: !this.state.visible
				});
			}
		});
		document.addEventListener('keyup', (event) => {
			if(event.keyCode == 18) {
				ctrlKey = false;
			}
		});
	}

	render(){

		return (
			<Controls visible={this.state.visible}/>
		)
	}
};

var initApp = (callback) =>{
	let nodeExists = !!document.getElementById('rule-mount-point');

	if(nodeExists){
		return;
	}

	else {
		let mountNode = document.createElement('div');
		mountNode.id = 'rule-mount-point';
		document.body.appendChild(mountNode);
		callback();
	}
};

initApp(() => {
	ReactDOM.render(<App/>, document.getElementById('rule-mount-point'));
});