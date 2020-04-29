import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { TelevisionStationMixin } from '../TelevisionStation';

export const TelevisionStationDependencies = [
  LocalBusinessMixin as Mixin,
  TelevisionStationMixin as Mixin];
