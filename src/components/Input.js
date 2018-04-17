import React from 'react';

class SearchInput extends Component{
	constructor(props){
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput() {
		console.log('get in handleInput evnet');
	}

	render(){
		return 
			<div>
				<form>
					<input type="text" placeholder="Sreach..." onKeyup={handleInput}/>
					{this.props.showCheck?(
					<input type="checkbox" />
					<label>Only show products in stock</label>):('')
					}
				</form>
			</div>
	}
}

export default SearchInput;