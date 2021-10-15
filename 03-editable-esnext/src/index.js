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

import '../style.css';
import '../editor.css';

// Destructure the json file to get the name and settings for the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { name, ...settings } = json;

// Register the block
registerBlockType( name, {
	...settings,
	edit, // Object shorthand property - same as writing: edit: edit,
	save, // Object shorthand property - same as writing: save: save,
} );
