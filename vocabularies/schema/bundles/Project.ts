import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { ProjectMixin } from '../lib/Project';

export const ProjectBundle = [
  OrganizationMixin as Mixin,
  ProjectMixin as Mixin];
