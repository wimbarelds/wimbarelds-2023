import { SanityCodegenConfig } from "sanity-codegen";

export default {
  schemaPath: './studio/schemaTypes.ts',
  outputPath: './src/sanity/generated/schema-types.ts',
} satisfies SanityCodegenConfig;
