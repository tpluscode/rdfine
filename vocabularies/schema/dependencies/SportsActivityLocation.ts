import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';

export const SportsActivityLocationDependencies = [
  LocalBusinessMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
