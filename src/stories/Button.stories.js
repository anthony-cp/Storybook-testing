import Button from '../components/Button.js'


/** Add JSDoc comment above export default<br /> this should be a line break.
 * For a new paragraph, you need an empty line between
 * 
 * >">" added at the start to add block quotes 
 * 
 * use the * or + or - sign to make unordered lists like so
 * * Oranges 
 * + apples
 *    * you can even nest it like this
 * 
 * Or use 1. 2. etc to make ordered lists
 * 1. Banana
 * 2. Pear
 * 
 * To make a table: 
 * 
 * | Name | Type | Description |
*| ---- | ---- | ----------- |
*| `name` | string | Name of the resource |
*| `path` | string | Path to the resource |
 * 
 * To add an image, first add an exclamation mark (!) followed by the alt text for the image in square brackets (e.g., ![Image alt text]) and the filename of the image in parentheses [e.g., (filename.jpg)].
 * 
 * Links
 *To create an external link in Markdown, write the link text in square brackets (e.g., [eBay]) followed by the URL in parentheses [e.g.[name] (https://ebay.com)].
 * [eBay](https://ebay.com)
 *
 * When you click the 'Show Code' below, it displays the "template" that was made (check below in the actual file). Would reccomend not using a template like this one, 
 * and either doing the template like how it is in stack.stories or not using a template? 
 */

export default {
    title: "components/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: { handleClick: { action: "handleClick"},
    backgroundColor: { control: {type: 'color'}},
    borderSize: { control: { type: 'range', min: 0, max: 50 } },
    },
} 

// This is the code that shows in storybook. Change this to change how the code would appear (See stack Docs)

const Template = args => <Button {...args}/> 

/** Red button testing */
export const Red = Template.bind({})
Red.args = {
    backgroundColor: "red",
    label: "press me",
    size: 'md'
}
Red.argTypes = {
    backgroundColor: {
    borderRadius: "25"
    }
} 

export const Green = Template.bind({})
Green.args = {
    backgroundColor: "green",
    label: "press me",
    size: 'md'
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: "blue",
    label: "press me",
    size: 'sm'
}
