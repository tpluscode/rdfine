import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { HgRepositoryMixin } from '../lib/HgRepository';

export const HgRepositoryBundle = [
  RepositoryMixin as Mixin,
  HgRepositoryMixin as Mixin];
