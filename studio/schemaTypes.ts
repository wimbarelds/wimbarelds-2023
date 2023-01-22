import type { SchemaTypeDefinition } from 'sanity';
import { testDocSchema } from "./schemas/testDoc";

export const schemaTypes: SchemaTypeDefinition[] = [
  testDocSchema,
];

export default schemaTypes;