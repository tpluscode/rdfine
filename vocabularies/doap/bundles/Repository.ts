import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../lib/Project';
import { RepositoryMixin } from '../lib/Repository';

export const RepositoryBundle = [
  ProjectMixin as Mixin,
  RepositoryMixin as Mixin];
