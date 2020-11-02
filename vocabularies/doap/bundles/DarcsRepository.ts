import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { DarcsRepositoryMixin } from '../DarcsRepository';

export const DarcsRepositoryBundle = [
  RepositoryMixin as Mixin,
  DarcsRepositoryMixin as Mixin];
