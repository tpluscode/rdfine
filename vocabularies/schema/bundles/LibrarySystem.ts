import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LibrarySystemMixin } from '../lib/LibrarySystem';
import { OrganizationMixin } from '../lib/Organization';

export const LibrarySystemBundle = [
  LibrarySystemMixin as Mixin,
  OrganizationMixin as Mixin];
