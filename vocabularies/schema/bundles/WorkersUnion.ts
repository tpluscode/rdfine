import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { WorkersUnionMixin } from '../WorkersUnion';

export const WorkersUnionBundle = [
  OrganizationMixin as Mixin,
  WorkersUnionMixin as Mixin];
