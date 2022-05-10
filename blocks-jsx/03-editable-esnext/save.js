/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { content },
	} = props;
	const blockProps = useBlockProps.save();

	return <RichText.Content { ...blockProps } tagName="p" value={ content } />;
};
export default Save;
