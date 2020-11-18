import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { DarcsRepositoryMixin } from '../lib/DarcsRepository';

export const DarcsRepositoryBundle = [
  RepositoryMixin as Mixin,
  DarcsRepositoryMixin as Mixin];
