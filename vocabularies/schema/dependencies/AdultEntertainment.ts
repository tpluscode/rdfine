import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { AdultEntertainmentMixin } from '../AdultEntertainment';

export const AdultEntertainmentDependencies = [
  EntertainmentBusinessMixin as Mixin,
  AdultEntertainmentMixin as Mixin];
