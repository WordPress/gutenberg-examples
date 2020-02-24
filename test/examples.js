/**
 * External dependencies
 */
import { create as createTestRenderer } from 'react-test-renderer';

/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

// @see https://jestjs.io/docs/en/getting-started
test( 'adds 1 + 2 to equal 3', () => {
	function sum( a, b ) {
		return a + b;
	}

	expect( sum( 1, 2 ) ).toBe( 3 );
} );

// @see https://jestjs.io/docs/en/tutorial-react
test( 'renders Button from WordPress components', () => {
	const testRenderer = createTestRenderer( <Button>Click Me!</Button> );

	expect( testRenderer.toJSON() ).toMatchSnapshot();
} );
