import { defineField, defineType } from "sanity"

const testDoc = defineType({
  name: 'testdoc',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    })
  ]
})

export const schemaTypes = [testDoc];
