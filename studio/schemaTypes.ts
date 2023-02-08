import type { SchemaTypeDefinition } from 'sanity';
import { heroSchema } from './schemas/hero';
import { pageSchema } from './schemas/page';
import { sectionSchema } from './schemas/section';
import { techSchema } from './schemas/tech';
import { testDocSchema } from "./schemas/testDoc";
import { traitSchema } from './schemas/trait';
import { traitsSchema } from './schemas/traits';

export const schemaTypes: SchemaTypeDefinition[] = [
  testDocSchema,
  pageSchema,
  heroSchema,
  techSchema,
  traitSchema,
  traitsSchema,
  sectionSchema,
];

export default schemaTypes;