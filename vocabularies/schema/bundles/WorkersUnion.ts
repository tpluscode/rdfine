import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { WorkersUnionMixin } from '../lib/WorkersUnion';

export const WorkersUnionBundle = [
  OrganizationMixin as Mixin,
  WorkersUnionMixin as Mixin];
