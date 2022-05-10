import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import { useEffect } from '@wordpress/element';

import {
	InnerBlocks,
	useBlockProps
} from '@wordpress/block-editor';

const DEFAULT_ATTRIBUTES = {
	activeTab: {
		type: 'string',
		default: '',
	},
	uid: {
		type: 'string',
		default: '',
	},
};

const TabEdit = ({ clientId, attributes, setAttributes }) => {
	const { activeTab, uid } = attributes;

	useEffect(() => {
		if (!uid) {
			setAttributes({ uid: clientId });
		}
	}, []);

	const display = activeTab === uid ? 'block' : 'none';

	const blockProps = useBlockProps({
		className: ('block' === display ? 'pad-block' : '')
	});

	return (
		<div {...blockProps} style={{ display }}>
			<InnerBlocks />
		</div>
	);
};

const TabSave = ({ attributes }) => {
	const { uid } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} data-tab-id={uid}>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType('gutenberg-examples/example-11-tab-esnext', {
	title: 'Single Tab (ESNext)',
	parent: ['gutenberg-examples/example-11-tabs-esnext'],
	icon: 'sos',
	example: '',
	attributes: DEFAULT_ATTRIBUTES,
	edit: TabEdit,
	save: TabSave,
});
