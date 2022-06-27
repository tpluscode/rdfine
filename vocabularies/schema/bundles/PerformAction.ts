import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { PerformActionMixin } from '../lib/PerformAction';
import { PlayActionMixin } from '../lib/PlayAction';

export const PerformActionBundle = [
  EntertainmentBusinessMixin as Mixin,
  PerformActionMixin as Mixin,
  PlayActionMixin as Mixin];
