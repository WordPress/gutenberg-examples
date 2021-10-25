/**
 * WordPress dependencies
 */
import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
} from '@wordpress/e2e-test-utils';

it( `Example: Example: Basic (ESNext) block should be available`, async () => {
	await createNewPost();
	await insertBlock( 'Example: Basic (ESNext)' );

	// Check if block was inserted
	expect(
		await page.$(
			'[data-type="gutenberg-examples/example-01-basic-esnext"]'
		)
	).not.toBeNull();

	expect( await getEditedPostContent() ).toMatchSnapshot();
} );
