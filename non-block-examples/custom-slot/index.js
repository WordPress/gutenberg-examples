/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { createSlotFill } from '@wordpress/components';

const CustomSlotSidebar = () => {
	const { Slot } = createSlotFill( 'CustomSlot' );

	return (
		<PluginSidebar
			name="example-custom-slot"
			title={ __( 'Custom Slot Example', 'gutenberg-examples' ) }
			icon="layout"
		>
			<div
				style={ {
					padding: '1rem 1rem',
				} }
			>
				<p>
					{ __(
						'This text is rendered statically in "custom-slot/index.js"',
						'gutenberg-examples'
					) }
				</p>
				<Slot />
			</div>
		</PluginSidebar>
	);
};

registerPlugin( 'example-custom-slot', { render: CustomSlotSidebar } );
