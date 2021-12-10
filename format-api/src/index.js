/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";

const MyCustomButton = (props) => {
    return (
        <RichTextToolbarButton
            icon="editor-code"
            title={ __( "Sample output" ) }
            onClick={() => {
                props.onChange(
                    toggleFormat(props.value, {
                        type: "my-custom-format/sample-output",
                    })
                );
            }}
            isActive={props.isActive}
        />
    );
};

registerFormatType("my-custom-format/sample-output", {
    title: __( "Sample output" ),
    tagName: "samp",
    className: null,
    edit: MyCustomButton,
});
