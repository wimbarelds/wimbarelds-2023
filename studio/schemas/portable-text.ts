import { defineArrayMember, defineField, defineType } from "sanity";

export const portableTextSchema = defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'object',
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
