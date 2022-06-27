import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DarcsRepositoryMixin } from '../lib/DarcsRepository';
import { RepositoryMixin } from '../lib/Repository';

export const DarcsRepositoryBundle = [
  DarcsRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
