import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlayActionMixin } from '../PlayAction';
import { PerformActionMixin } from '../PerformAction';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';

export const PerformActionDependencies = [
  PlayActionMixin as Mixin,
  PerformActionMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
