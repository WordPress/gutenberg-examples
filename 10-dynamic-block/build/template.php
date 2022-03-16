<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	if ( isset( $attributes['message'] ) ) {
		echo wp_kses_post ( $attributes['message'] );
	}
	?>
</p>
