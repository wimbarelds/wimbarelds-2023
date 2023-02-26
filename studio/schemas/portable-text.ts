import { defineArrayMember, defineField, defineType, PortableTextBlock, PortableTextObject, PortableTextSpan } from "sanity";
import { BlockContentIcon } from '@sanity/icons';

const blocksToText = (blocks: PortableTextBlock[], {nonTextBehavior = 'remove'} = {}) => {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      const children = block.children as Array<PortableTextSpan | PortableTextObject>;
      return children.map(child => child.text).join('')
    })
    .join('\n\n')  
}

export const portableTextSchema = defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'object',
  preview: {
    select: {
      blocks: 'blocks'
    },
    prepare(value) {
      return {
        title: blocksToText(value.blocks),
        subtitle: 'portable-text',
        media: BlockContentIcon,
      }
    },
  },  
  fields: [
    defineField({
      name: 'blocks',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
      ],
    })
  ]
});
