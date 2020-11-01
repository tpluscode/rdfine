import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { ArchRepositoryMixin } from '../ArchRepository';

export const ArchRepositoryBundle = [
  RepositoryMixin as Mixin,
  ArchRepositoryMixin as Mixin];
