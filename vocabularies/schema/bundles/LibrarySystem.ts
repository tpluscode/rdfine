import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { LibrarySystemMixin } from '../lib/LibrarySystem';

export const LibrarySystemBundle = [
  OrganizationMixin as Mixin,
  LibrarySystemMixin as Mixin];
