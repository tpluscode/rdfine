import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';

export const EntertainmentBusinessDependencies = [
  LocalBusinessMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
