/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from '../block.json';
import edit from './edit';
import save from './save';

const { name, ...settings } = json;

registerBlockType( name, {
	...settings,
	edit,
	save,
} );
