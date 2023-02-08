import {defineField, defineType} from 'sanity';

export const traitsSchema = defineType({
  type: 'object',
  name: 'traits',
  fields: [
    defineField({
      name: 'title',
      title: 'section title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'trait'}],
    })
  ]
})