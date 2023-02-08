import {defineField, defineType} from 'sanity';

export const techSchema = defineType({
  type: 'object',
  name: 'technologies',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      // I'd like to add more here later
      of: [{type: 'string'}],
    })
  ]
})