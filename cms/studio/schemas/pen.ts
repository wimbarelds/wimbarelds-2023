import {defineArrayMember, defineField, defineType} from 'sanity';

export const penSchema = defineType({
  type: 'document',
  name: 'pen',
  fields: [
    defineField({
      name: 'title',
      title: 'Pen title',
      type: 'string',
    }),
    defineField({
      name: 'created',
      title: 'Created',
      type: 'datetime'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({type: 'portableText'}),
        defineArrayMember({
          type: 'object',
          title: 'Codepen ID',
          fields: [
            defineField({
              name: 'codepenId',
              type: 'string',
            })
          ]
        }),
      ],
    }),
  ]
})