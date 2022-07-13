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
			<p>
				{ __(
					'This "Fill" is coming from another script.',
					'gutenberg-examples'
				) }
			</p>
		</Fill>
	);
};

registerPlugin( 'example-custom-fill', { render: CustomFill } );
