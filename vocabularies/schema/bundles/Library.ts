import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LibraryMixin } from '../lib/Library';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const LibraryBundle = [
  LibraryMixin as Mixin,
  LocalBusinessMixin as Mixin];
