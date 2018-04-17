import React from 'react';
import SearchInp from 'input';
import ProductList from 'list';

class Product extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div>
			<SearchInp showCheck=true/>
			<ProductList />
		</div>
	}
}