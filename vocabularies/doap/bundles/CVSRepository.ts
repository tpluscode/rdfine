import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CVSRepositoryMixin } from '../lib/CVSRepository';
import { RepositoryMixin } from '../lib/Repository';

export const CVSRepositoryBundle = [
  CVSRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
