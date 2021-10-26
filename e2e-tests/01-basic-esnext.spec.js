/**
 * WordPress dependencies
 */
import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
} from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import json from '../01-basic-esnext/block.json';
const { title, name } = json;

// Increase the timeout limit for this test.
jest.setTimeout( 100000 );

it( `${ title } block should be available`, async () => {
	await createNewPost();
	await insertBlock( title );

	// Check if block was inserted
	expect( await page.$( `[data-type="${ name }"]` ) ).not.toBeNull();

	expect( await getEditedPostContent() ).toMatchInlineSnapshot( `
		"<!-- wp:gutenberg-examples/example-01-basic-esnext -->
		<div style=\\"background-color:#900;color:#fff;padding:20px\\" class=\\"wp-block-gutenberg-examples-example-01-basic-esnext\\">Hello World, step 1 (from the frontend).</div>
		<!-- /wp:gutenberg-examples/example-01-basic-esnext -->"
	` );
} );
