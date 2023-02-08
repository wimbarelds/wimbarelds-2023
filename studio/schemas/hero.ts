import {defineField, defineType} from 'sanity';

export const heroSchema = defineType({
  type: 'object',
  name: 'hero.section',
  fields: [
    defineField({
      name: 'picture',
      type: 'image',
    }),
    defineField({
      name: 'website',
      title: 'About the website',
      type: 'section',
    }),
    defineField({
      name: 'me',
      title: 'About me',
      type: 'section',
    }),
  ]
})