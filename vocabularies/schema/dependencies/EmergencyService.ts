import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EmergencyServiceMixin } from '../EmergencyService';

export const EmergencyServiceDependencies = [
  LocalBusinessMixin as Mixin,
  EmergencyServiceMixin as Mixin];
