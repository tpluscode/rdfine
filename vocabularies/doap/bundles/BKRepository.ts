import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BKRepositoryMixin } from '../lib/BKRepository';
import { RepositoryMixin } from '../lib/Repository';

export const BKRepositoryBundle = [
  BKRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
