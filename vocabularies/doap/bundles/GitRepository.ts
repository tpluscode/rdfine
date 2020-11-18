import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { GitRepositoryMixin } from '../lib/GitRepository';

export const GitRepositoryBundle = [
  RepositoryMixin as Mixin,
  GitRepositoryMixin as Mixin];
