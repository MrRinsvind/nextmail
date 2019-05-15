import { FONT_FAMILIES } from '../../utils/constants'


export default {
  "hidden": true,
  "settings": [
    {
      "name": "backgroundColor",
      "type": "color",
      "label": "Background color",
      "default": "",
      "fieldClass": "editor-input editor-input--color mb-4",
      "fullWidth": false,
      "section": "Background colors",
      "tooltip": "This is the body and content background colors for your newsletter. You can override the colors for each new section you add to your newsletter."
    },
    {
      "name": "contentColor",
      "type": "color",
      "label": "Content color",
      "default": "",
      "fieldClass": "editor-input editor-input--color mb-4",
      "fullWidth": false,
      "position": "right",
      "section": "Background colors",
    },
    {
      "name": "headingFontFamily",
      "type": "select",
      "label": "Font family",
      "default": "Arial, sans-serif",
      "fieldClass": "editor-input--select mb-4",
      "options": FONT_FAMILIES,
      "fullWidth": true,
      "section": "Headings",
      "tooltip": `This is the global styles for you headings. Each heading can be overwritten individually. Do that by adding new headings through the text block.
      Please note that Web fonts doesn't work in every email client, so test before sending. We have added a similar font as backup so your email will always be readable.`
    },
    {
      "name": "headingFontSize",
      "type": "number",
      "label": "Font size",
      "default": 24,
      "fieldClass": "editor-input--number mb-4",
      "section": "Headings",
    },
    {
      "name": "headingFontColor",
      "type": "color",
      "label": "Font color",
      "default": "#000",
      "fieldClass": "editor-input--number mb-4",
      "section": "Headings",
    },
    {
      "name": "heiadingLineHeight",
      "type": "select",
      "label": "Line height",
      "default": "1.3",
      "fieldClass": "editor-input--number mb-4",
      "section": "Headings",
      "options": [
        {
          "label": "1.1",
          "value": "1.1"
        },
        {
          "label": "1.2",
          "value": "1.2"
        },
        {
          "label": "1.3",
          "value": "1.3"
        }
      ]
    },
    {
      "name": "headingFontWeight",
      "type": "buttons",
      "label": "Font weight",
      "default": "bold",
      "section": "Headings",
      "options": [
        {
          "value": "bold",
          "label": "Bold"
        },
        {
          "value": "normal",
          "label": "Normal"
        },
      ],
      "fieldClass": "editor-input--buttons mb-4"
    },
    {
      "name": "fontFamily",
      "type": "select",
      "label": "Font family",
      "default": "Arial, sans-serif",
      "fieldClass": "editor-input--select mb-4",
      "options": FONT_FAMILIES,
      "fullWidth": true,
      "section": "Normal text",
      "tooltip": `This is the global styles for your normal text. All text can be overwritten individually. Do that by selecting the text you want to edit in the newsletter.
      Please note that Web fonts doesn't work in every email client, so test before sending. We have added a similar font as backup so your email will always be readable.`
    },
    {
      "name": "fontSize",
      "type": "number",
      "label": "Font size",
      "default": 13,
      "fieldClass": "editor-input--number mb-4",
      "section": "Normal text"
    },
    {
      "name": "fontColor",
      "type": "color",
      "label": "Font color",
      "default": "#000",
      "fieldClass": "editor-input--number mb-4",
      "section": "Normal text"
    },
    {
      "name": "lineHeight",
      "type": "select",
      "label": "Line height",
      "default": "1.3",
      "fieldClass": "editor-input--number mb-4",
      "section": "Normal text",
      "options": [
        {
          "label": "1.1",
          "value": "1.1"
        },
        {
          "label": "1.2",
          "value": "1.2"
        },
        {
          "label": "1.3",
          "value": "1.3"
        }
      ]
    },
    {
      "name": "linkColor",
      "type": "color",
      "label": "Link color",
      "default": "#000",
      "fieldClass": "editor-input--number mb-4",
      "section": "Normal text"
    },
    {
      "name": "dividerStyle",
      "type": "select",
      "label": "Divider style",
      "default": "solid",
      "fieldClass": "editor-input--number mb-4",
      "section": "Divider",
      "tooltip": "This is where you add global styling for your dividers. Each divider can be overwritten individually.",
      "options": [
        {
          "label": "Solid",
          "value": "solid"
        },
        {
          "label": "Dashed",
          "value": "dashed"
        },
        {
          "label": "Dotted",
          "value": "dotted"
        }
      ]
    },
    {
      "name": "dividerHeight",
      "type": "number",
      "label": "Height",
      "default": 6,
      "fieldClass": "editor-input--number mb-4",
      "section": "Divider"
    },
    {
      "name": "dividerColor",
      "type": "color",
      "label": "Color",
      "default": "red",
      "fieldClass": "editor-input--number mb-4",
      "section": "Divider"
    }
  ]
}
