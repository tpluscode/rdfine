import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { CVSRepositoryMixin } from '../lib/CVSRepository';

export const CVSRepositoryBundle = [
  RepositoryMixin as Mixin,
  CVSRepositoryMixin as Mixin];
