import {defineField, defineType} from 'sanity';

export const sectionSchema = defineType({
  type: 'object',
  name: 'section',
  fields: [
    defineField({
      name: 'title',
      title: 'section title',
      type: 'string',
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