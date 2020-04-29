import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { WorkersUnionMixin } from '../WorkersUnion';

export const WorkersUnionDependencies = [
  OrganizationMixin as Mixin,
  WorkersUnionMixin as Mixin];
