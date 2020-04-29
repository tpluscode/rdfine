import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { RadioStationMixin } from '../RadioStation';

export const RadioStationDependencies = [
  LocalBusinessMixin as Mixin,
  RadioStationMixin as Mixin];
