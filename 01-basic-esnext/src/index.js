import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor'

import json from '../block.json';

const { name, ...settings } = json;

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};
registerBlockType( name, {
	...settings,
	edit() {
		const blockProps = useBlockProps({ style: blockStyle });
		return (
			<div {...blockProps}>
				Hello World, step 1 (from the editor).
			</div>
		);
	},
	save() {
		const blockProps = useBlockProps.save({ style: blockStyle });
		return (
			<div {...blockProps}>
				Hello World, step 1 (from the frontend).
			</div>
		);
	},
} );
