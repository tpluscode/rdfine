import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HgRepositoryMixin } from '../lib/HgRepository';
import { RepositoryMixin } from '../lib/Repository';

export const HgRepositoryBundle = [
  HgRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
