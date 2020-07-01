import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { LibraryMixin } from '../Library';

export const LibraryBundle = [
  LocalBusinessMixin as Mixin,
  LibraryMixin as Mixin];
