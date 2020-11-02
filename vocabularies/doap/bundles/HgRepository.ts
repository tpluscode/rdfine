import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { HgRepositoryMixin } from '../HgRepository';

export const HgRepositoryBundle = [
  RepositoryMixin as Mixin,
  HgRepositoryMixin as Mixin];
