/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { blockStyle } from './index';

const Save = () => {
	const blockProps = useBlockProps.save( { style: blockStyle } );
	return (
		<div { ...blockProps }>
			{ __(
				'Hello World, step 1 (from the frontend).',
				'gutenberg-examples'
			) }
		</div>
	);
};
export default Save;
