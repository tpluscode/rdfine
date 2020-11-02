import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { GitRepositoryMixin } from '../GitRepository';

export const GitRepositoryBundle = [
  RepositoryMixin as Mixin,
  GitRepositoryMixin as Mixin];
