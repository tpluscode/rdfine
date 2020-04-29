import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoRentalMixin } from '../AutoRental';

export const AutoRentalDependencies = [
  AutomotiveBusinessMixin as Mixin,
  AutoRentalMixin as Mixin];
