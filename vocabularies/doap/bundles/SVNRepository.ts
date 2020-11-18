import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { SVNRepositoryMixin } from '../lib/SVNRepository';

export const SVNRepositoryBundle = [
  RepositoryMixin as Mixin,
  SVNRepositoryMixin as Mixin];
