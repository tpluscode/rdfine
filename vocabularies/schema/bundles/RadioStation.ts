import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { RadioStationMixin } from '../RadioStation';

export const RadioStationBundle = [
  LocalBusinessMixin as Mixin,
  RadioStationMixin as Mixin];
