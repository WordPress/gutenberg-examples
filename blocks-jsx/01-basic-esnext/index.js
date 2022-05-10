/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import Edit from './edit';
import save from './save';

// Export this so we can use it in the edit and save files
export const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

// Destructure the json file to get the name of the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { name } = json;

// Register the block
registerBlockType( name, {
	edit: Edit,
	save, // Object shorthand property - same as writing: save: save,
} );
