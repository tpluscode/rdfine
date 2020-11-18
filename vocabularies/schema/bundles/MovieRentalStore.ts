import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { MovieRentalStoreMixin } from '../lib/MovieRentalStore';

export const MovieRentalStoreBundle = [
  StoreMixin as Mixin,
  MovieRentalStoreMixin as Mixin];
