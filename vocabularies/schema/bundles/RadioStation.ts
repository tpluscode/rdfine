import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { RadioStationMixin } from '../lib/RadioStation';

export const RadioStationBundle = [
  LocalBusinessMixin as Mixin,
  RadioStationMixin as Mixin];
