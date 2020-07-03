import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EmergencyServiceMixin } from '../EmergencyService';

export const EmergencyServiceBundle = [
  LocalBusinessMixin as Mixin,
  EmergencyServiceMixin as Mixin];
