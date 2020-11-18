import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { ArchRepositoryMixin } from '../lib/ArchRepository';

export const ArchRepositoryBundle = [
  RepositoryMixin as Mixin,
  ArchRepositoryMixin as Mixin];
