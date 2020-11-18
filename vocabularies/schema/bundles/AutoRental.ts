import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoRentalMixin } from '../lib/AutoRental';

export const AutoRentalBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoRentalMixin as Mixin];
