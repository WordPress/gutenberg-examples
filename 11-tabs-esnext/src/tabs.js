import { registerBlockType, createBlock } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

import {
	InnerBlocks,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['gutenberg-examples/example-11-tab-esnext'];
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

const TabsEdit = ({
	clientId,
	attributes,
	setAttributes,
	setActiveTab,
	insertBlock,
}) => {
	const { tabs, activeTab } = attributes;

	useEffect(() => {
		if (tabs.length && !activeTab) {
			setActiveTab(tabs[0].uid);
		}
	}, []);

	const blockProps = useBlockProps();

	return (

		<div {...blockProps}>
			<div className='tabs__group'>
				{tabs.map(({ title, uid }, i) => {
					let tabClass = 'single__tab';
					if (uid === activeTab) {
						' single__tab--active';
					}

					return (
						<div
							className={tabClass}
							key={uid}
							onClick={() => setActiveTab(uid)}
							onKeyDown={() => setActiveTab(uid)}
							role="tab"
							tabIndex="0"
						>
							<RichText
								tagName="div"
								value={title}
								onChange={(value) => {
									const newTabs = [...tabs];
									newTabs[i].title = value;
									setAttributes({ tabs: newTabs });
								}}
							/>
						</div>
					);
				})}
				<Button
					icon="plus"
					label="Add Tab"
					onClick={() => {
						const position = tabs.length;
						const tab = createBlock(
							'gutenberg-examples/example-11-tab-esnext'
						);
						insertBlock(tab, position, clientId);
						setAttributes({
							tabs: [
								...tabs,
								{
									uid: tab.clientId,
									title: `New Tab ${position + 1}`,
								},
							],
						});
						setActiveTab(tab.clientId);
					}}
				/>
			</div>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				renderAppender={false}
			/>
		</div>
	);
};

const TabsSave = ({ attributes }) => {
	const { tabs } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className='tabs__group'>
				{tabs.map(({ title, uid }) => {
					return (
						<div
							key={uid}
							data-tab-id={uid}
							className='single__tab'
						>
							{title}
						</div>
					);
				})}
			</div>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType('gutenberg-examples/example-11-tabs-esnext', {
	title: 'Example: Tabs (ESNext)',
	category: 'layout',
	icon: 'universal-access-alt',
	example: '',
	attributes: DEFAULT_ATTRIBUTES,
	edit: compose(
		withDispatch((dispatch, ownProps, { select }) => {
			const { getBlock } = select('core/block-editor');
			const { updateBlockAttributes, insertBlock } = dispatch(
				'core/block-editor'
			);
			const block = getBlock(ownProps.clientId);

			return {
				insertBlock,
				setActiveTab(activeTab) {
					updateBlockAttributes(
						ownProps.clientId, {
						activeTab
					}
					);
					block.innerBlocks.forEach((innerBlock) => {
						updateBlockAttributes(
							innerBlock.clientId, {
							activeTab,
						});
					});
				},
			};
		})
	)(TabsEdit),
	save: TabsSave,
});
