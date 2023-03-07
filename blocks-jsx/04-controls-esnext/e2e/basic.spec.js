/**
 * WordPress dependencies
 */
import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
} from '@wordpress/e2e-test-utils';

// This test seems to need more time to run.
jest.setTimeout( 100000 );
/**
 * Internal dependencies
 */
import json from '../block.json';
const { title, name } = json;

it( `${ title } block should be available`, async () => {
	await createNewPost();
	await insertBlock( title );

	// Check if block was inserted
	expect( await page.$( `[data-type="${ name }"]` ) ).not.toBeNull();

	expect( await getEditedPostContent() ).toMatchInlineSnapshot( `
		"<!-- wp:gutenberg-examples/example-04-controls-esnext -->
		<p class=\\"wp-block-gutenberg-examples-example-04-controls-esnext gutenberg-examples-align-none\\"></p>
		<!-- /wp:gutenberg-examples/example-04-controls-esnext -->"
	` );
} );
