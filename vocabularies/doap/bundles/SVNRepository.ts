import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { SVNRepositoryMixin } from '../SVNRepository';

export const SVNRepositoryBundle = [
  RepositoryMixin as Mixin,
  SVNRepositoryMixin as Mixin];
