import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../Project';
import { RepositoryMixin } from '../Repository';

export const RepositoryBundle = [
  ProjectMixin as Mixin,
  RepositoryMixin as Mixin];
