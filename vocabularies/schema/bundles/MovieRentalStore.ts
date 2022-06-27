import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MovieRentalStoreMixin } from '../lib/MovieRentalStore';
import { StoreMixin } from '../lib/Store';

export const MovieRentalStoreBundle = [
  MovieRentalStoreMixin as Mixin,
  StoreMixin as Mixin];
