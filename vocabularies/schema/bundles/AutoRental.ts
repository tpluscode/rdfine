import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoRentalMixin } from '../AutoRental';

export const AutoRentalBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoRentalMixin as Mixin];
