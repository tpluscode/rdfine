import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GitRepositoryMixin } from '../lib/GitRepository';
import { RepositoryMixin } from '../lib/Repository';

export const GitRepositoryBundle = [
  GitRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
