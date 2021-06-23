import { render } from '@wordpress/element';
import { AsyncPaginate } from 'react-select-async-paginate';

const Main = () => (
	<div>
		<h1>Main</h1>
		<AsyncPaginate />
	</div>
);

function renderComponent() {
	render( <Main />, document.querySelector( '#wpbody-content div.wrap' ) );
}
window.renderComponent = renderComponent;
