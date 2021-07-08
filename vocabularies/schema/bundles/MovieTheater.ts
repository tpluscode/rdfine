import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { MovieTheaterMixin } from '../lib/MovieTheater';

export const MovieTheaterBundle = [
  EntertainmentBusinessMixin as Mixin,
  CivicStructureMixin as Mixin,
  MovieTheaterMixin as Mixin];
