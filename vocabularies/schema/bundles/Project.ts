import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { ProjectMixin } from '../Project';

export const ProjectBundle = [
  OrganizationMixin as Mixin,
  ProjectMixin as Mixin];
