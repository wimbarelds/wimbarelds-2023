import type { SchemaTypeDefinition } from 'sanity';
import { heroSchema } from './schemas/hero';
import { homeSchema } from './schemas/home';
import { pageSchema, pageSectionSchema } from './schemas/page';
import { penSchema } from './schemas/pen';
import { portableTextSchema } from './schemas/portable-text';
import { sectionSchema } from './schemas/section';
import { techSchema } from './schemas/tech';
import { testDocSchema } from "./schemas/testDoc";
import { traitSchema } from './schemas/trait';
import { traitsSchema } from './schemas/traits';

export const schemaTypes: SchemaTypeDefinition[] = [
  testDocSchema,
  homeSchema,
  pageSectionSchema,
  pageSchema,
  heroSchema,
  techSchema,
  traitSchema,
  traitsSchema,
  sectionSchema,
  penSchema,
  portableTextSchema,
];

export default schemaTypes;