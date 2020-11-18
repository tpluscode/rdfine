import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { LibraryMixin } from '../lib/Library';

export const LibraryBundle = [
  LocalBusinessMixin as Mixin,
  LibraryMixin as Mixin];
