import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { BKRepositoryMixin } from '../BKRepository';

export const BKRepositoryBundle = [
  RepositoryMixin as Mixin,
  BKRepositoryMixin as Mixin];
