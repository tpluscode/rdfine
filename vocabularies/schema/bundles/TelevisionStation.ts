import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { TelevisionStationMixin } from '../TelevisionStation';

export const TelevisionStationBundle = [
  LocalBusinessMixin as Mixin,
  TelevisionStationMixin as Mixin];
