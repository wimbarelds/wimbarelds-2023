import {defineField, defineType} from 'sanity';

export const pageSchema = defineType({
  type: 'document',
  name: 'home',
  fields: [
    defineField({
      name: 'title',
      title: 'page title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      type: 'hero.section',
    }),
    defineField({
      name: 'about',
      title: 'content',
      type: 'array',
      of: [
        {type: 'block'},
      ],
    }),
    defineField({
      name: 'traits',
      title: 'traits',
      type: 'traits',
    }),
    defineField({
      name: 'technologies',
      type: 'technologies',
    })
  ]
})