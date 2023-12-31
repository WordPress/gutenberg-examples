/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { createSlotFill } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

const CustomFill = () => {
	const { Fill } = createSlotFill( 'CustomSlot' );

	return (
		<Fill>
			<p
				style={ {
					color: 'var(--wp-admin-theme-color)',
				} }
			>
				{ __(
					'This text is a "Fill" from "custom-fill/index.js", rendered via a portal in the custom "Slot"',
					'gutenberg-examples'
				) }
			</p>
		</Fill>
	);
};

registerPlugin( 'example-custom-fill', { render: CustomFill } );
