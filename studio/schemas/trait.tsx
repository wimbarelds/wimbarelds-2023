import {defineField, defineType} from 'sanity';

export const traitSchema = defineType({
  type: 'object',
  name: 'trait',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'symbol',
      type: 'string',
      title: 'Material symbol',
      description: 'Item from material symbols',
    }),
    defineField({
      name: 'text',
      title: 'content',
      type: 'array',
      of: [
        {type: 'block'},
      ],
    })
  ]
})