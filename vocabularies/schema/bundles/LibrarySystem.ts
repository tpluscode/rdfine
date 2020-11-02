import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { LibrarySystemMixin } from '../LibrarySystem';

export const LibrarySystemBundle = [
  OrganizationMixin as Mixin,
  LibrarySystemMixin as Mixin];
