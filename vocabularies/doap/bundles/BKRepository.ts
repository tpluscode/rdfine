import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { BKRepositoryMixin } from '../lib/BKRepository';

export const BKRepositoryBundle = [
  RepositoryMixin as Mixin,
  BKRepositoryMixin as Mixin];
