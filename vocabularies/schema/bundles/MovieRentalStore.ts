import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { MovieRentalStoreMixin } from '../MovieRentalStore';

export const MovieRentalStoreBundle = [
  StoreMixin as Mixin,
  MovieRentalStoreMixin as Mixin];
