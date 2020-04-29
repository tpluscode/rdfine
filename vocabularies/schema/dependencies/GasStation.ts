import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { GasStationMixin } from '../GasStation';

export const GasStationDependencies = [
  AutomotiveBusinessMixin as Mixin,
  GasStationMixin as Mixin];
