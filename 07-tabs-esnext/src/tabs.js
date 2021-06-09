import { useEffect } from 'react';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { IconButton } from '@wordpress/components';

const ALLOWED_BLOCKS = [ 'gutenberg-examples/example-07-tab-esnext' ];
const DEFAULT_ATTRIBUTES = {
	tabs: {
		type: 'array',
		default: [],
	},
	activeTab: {
		type: 'string',
		default: '',
	},
};

const TabsEdit = ( {
	clientId,
	className,
	attributes,
	setAttributes,
	setActiveTab,
	insertBlock,
} ) => {
	const { tabs, activeTab } = attributes;

	useEffect( () => {
		if ( tabs.length && ! activeTab ) {
			setActiveTab( tabs[ 0 ].uid );
		}
	}, [] );

	return (
		<div className={ className }>
			<div className={ `${ className }__tabs` }>
				{ tabs.map( ( { title, uid }, i ) => {
					let tabClass = `${ className }__tab`;
					if ( uid === activeTab ) {
						tabClass += ` ${ className }__tab--active`;
					}

					return (
						<div
							className={ tabClass }
							key={ uid }
							onClick={ () => setActiveTab( uid ) }
							onKeyDown={ () => setActiveTab( uid ) }
							role="tab"
							tabIndex="0"
						>
							<RichText
								tagName="div"
								value={ title }
								onChange={ ( value ) => {
									const newTabs = [ ...tabs ];
									newTabs[ i ].title = value;
									setAttributes( { tabs: newTabs } );
								} }
							/>
						</div>
					);
				} ) }
				<IconButton
					icon="plus"
					label="Add Tab"
					onClick={ () => {
						const position = tabs.length;
						const tab = createBlock(
							'gutenberg-examples/example-07-tab-esnext'
						);
						insertBlock( tab, position, clientId );
						setAttributes( {
							tabs: [
								...tabs,
								{
									uid: tab.clientId,
									title: 'New Tab',
								},
							],
						} );
						setActiveTab( tab.clientId );
					} }
				/>
			</div>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ false }
			/>
		</div>
	);
};

const TabsSave = ( { attributes } ) => {
	const className = 'wp-block-gutenberg-examples-example-07-tabs-esnext';
	const { tabs } = attributes;

	return (
		<div>
			<div className={ `${ className }__tabs` }>
				{ tabs.map( ( { title, uid } ) => {
					return (
						<div
							key={ uid }
							data-tab-id={ uid }
							className={ `${ className }__tab` }
						>
							{ title }
						</div>
					);
				} ) }
			</div>

			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType( 'gutenberg-examples/example-07-tabs-esnext', {
	title: 'Example: Tabs (ESNext)',
	category: 'layout',
	attributes: DEFAULT_ATTRIBUTES,
	edit: compose(
		withDispatch( ( dispatch, ownProps, { select } ) => {
			const { getBlock } = select( 'core/block-editor' );
			const { updateBlockAttributes, insertBlock } = dispatch(
				'core/block-editor'
			);
			const block = getBlock( ownProps.clientId );

			return {
				insertBlock,
				setActiveTab( activeTab ) {
					updateBlockAttributes( ownProps.clientId, { activeTab } );
					block.innerBlocks.forEach( ( innerBlock ) => {
						updateBlockAttributes( innerBlock.clientId, {
							activeTab,
						} );
					} );
				},
			};
		} )
	)( TabsEdit ),
	save: TabsSave,
} );
