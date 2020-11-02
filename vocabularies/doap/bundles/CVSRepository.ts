import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { CVSRepositoryMixin } from '../CVSRepository';

export const CVSRepositoryBundle = [
  RepositoryMixin as Mixin,
  CVSRepositoryMixin as Mixin];
