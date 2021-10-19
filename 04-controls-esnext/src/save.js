/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: `gutenberg-examples-align-${ props.attributes.alignment }`,
	} );
	return (
		<RichText.Content
			{ ...blockProps }
			tagName="p"
			value={ props.attributes.content }
		/>
	);
};

export default Save;
