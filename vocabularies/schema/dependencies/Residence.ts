import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { ResidenceMixin } from '../Residence';

export const ResidenceDependencies = [
  PlaceMixin as Mixin,
  ResidenceMixin as Mixin];
