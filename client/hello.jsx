let React = require('react');
let $ = require('jquery');
window.$ = $;
window.jQuery = $;

let NormalButton = React.createClass({
	render: function() {
		let bclass = this.props.buttonclass==undefined?'btn btn-primary':'btn '+this.props.buttonclass;
		return (<button id="source-button" type="button" className={bclass} onClick={this.props.clickHandler}>{this.props.label}</button>);
	}
});

let Hello = React.createClass({
	getInitialState: function(){
		return {expanded:false};
	},
	clickHandler: function(){
		this.setState({expanded:!this.state.expanded});
	},
	render: function() {
		let message = 'Hello World!';
		let label = 'Click to hello out loud';
		
		if (this.state.expanded) {
			message = 'HELLO WORLD';
			label = 'Click to hello silently'
		}
		let button = <NormalButton label={label} clickHandler={this.clickHandler} />
		return(
			<div className="bs-component well col-lg-6">
				{message}
				
				{button}
			</div>
			);
	}
});


React.render(<Hello />,document.getElementById('hello'));