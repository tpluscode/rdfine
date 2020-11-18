import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlayActionMixin } from '../lib/PlayAction';
import { PerformActionMixin } from '../lib/PerformAction';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const PerformActionBundle = [
  PlayActionMixin as Mixin,
  PerformActionMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
