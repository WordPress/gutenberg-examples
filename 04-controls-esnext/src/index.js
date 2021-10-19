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

import '../editor.css';
import '../style.css';

const { name, ...settings } = json;

registerBlockType( name, {
	...settings,
	edit,
	save,
} );
