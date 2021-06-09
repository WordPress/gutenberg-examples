import { useEffect } from 'react';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

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

const TabEdit = ( { className, clientId, attributes, setAttributes } ) => {
	const { activeTab, uid } = attributes;

	useEffect( () => {
		// only do this if there is no uid already, meaning it is a newly created tab
		if ( ! uid ) {
			setAttributes( { uid: clientId } );
		}
	}, [] );

	const display = activeTab === uid ? 'block' : 'none';

	return (
		<div className={ className } style={ { display } }>
			<InnerBlocks />
		</div>
	);
};

const TabSave = ( { className, attributes } ) => {
	const { uid } = attributes;

	return (
		<div className={ className } data-tab-id={ uid }>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType( 'gutenberg-examples/example-07-tab-esnext', {
	title: 'Example: Tab (ESNext)',
	parent: [ 'gutenberg-examples/example-07-tabs-esnext' ],
	category: 'layout',
	attributes: DEFAULT_ATTRIBUTES,
	edit: TabEdit,
	save: TabSave,
} );
