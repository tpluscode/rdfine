import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArchRepositoryMixin } from '../lib/ArchRepository';
import { RepositoryMixin } from '../lib/Repository';

export const ArchRepositoryBundle = [
  ArchRepositoryMixin as Mixin,
  RepositoryMixin as Mixin];
