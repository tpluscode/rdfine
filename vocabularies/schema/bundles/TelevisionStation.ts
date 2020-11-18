import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { TelevisionStationMixin } from '../lib/TelevisionStation';

export const TelevisionStationBundle = [
  LocalBusinessMixin as Mixin,
  TelevisionStationMixin as Mixin];
