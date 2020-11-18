import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { MovieTheaterMixin } from '../lib/MovieTheater';

export const MovieTheaterBundle = [
  CivicStructureMixin as Mixin,
  EntertainmentBusinessMixin as Mixin,
  MovieTheaterMixin as Mixin];
