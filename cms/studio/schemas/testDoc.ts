import { defineField, defineType } from "sanity"

export const testDocSchema = defineType({
  name: 'testdoc',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    })
  ]
});

