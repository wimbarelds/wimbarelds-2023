import {defineArrayMember, defineField, defineType} from 'sanity';
import {
  BlockElementIcon,
  StringIcon,
  SearchIcon,
  OlistIcon,
  BlockContentIcon,
  TagIcon,
  BoldIcon,
  NumberIcon,
} from '@sanity/icons';

export const pageSectionSchema = defineType({
  name: 'page_section',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      section_title: 'section_title',
      id: 'id',
    },
    prepare(value) {
      return {
        title: value.section_title,
        subtitle: value.id,
        media: BlockElementIcon,
      }
    },
  },
  fields: [
    defineField({
      name: 'section_title',
      type: 'string',
      title: 'Section title',
      icon: StringIcon,
    }),
    defineField({
      name: 'id',
      type: 'string',
      options: {
        list: ['splash', 'about', 'experience'],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      icon: OlistIcon,
    }),
    defineField({
      name: 'section_modules',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'portableText',
          name: 'module_richtext',
          icon: BlockContentIcon,
        }),
        defineArrayMember({
          type: 'object',
          name: 'list',
          icon: TagIcon,
          preview: {
            select: {
              subtype: 'subtype',
              items: 'items',
            },
            prepare({subtype, items}) {
              return {
                title: items.join(', '),
                subtitle: subtype,
                icon: TagIcon,
              }
            }
          },
          fields: [
            defineField({
              name: 'subtype',
              type: 'string',
              icon: StringIcon,
            }),
            defineField({
              type: 'array',
              name: 'items',
              of: [defineArrayMember({type: 'string'})],
              icon: TagIcon
            }),
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'heading',
          icon: BoldIcon,
          preview: {
            select: {
              text: 'text',
              level: 'level',
            },
            prepare({text, level}) {
              return {
                title: text,
                subtitle: `H${level}`,
                media: BoldIcon,
              }
            }
          },
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              icon: StringIcon,
            }),
            defineField({
              name: 'level',
              type: 'number',
              initialValue: 3,
              icon: NumberIcon,
            }),
          ],
        }),
        defineArrayMember({type: 'page_section'})
      ],
    }),
  ],
});

export const pageSchema = defineType({
  type: 'document',
  name: 'page',
  fields: [
    defineField({
      name: 'title',
      title: 'page title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      icon: SearchIcon,
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'page_section'}),
      ],
    }),
  ],
});
