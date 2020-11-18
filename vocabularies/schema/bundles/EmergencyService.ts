import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { EmergencyServiceMixin } from '../lib/EmergencyService';

export const EmergencyServiceBundle = [
  LocalBusinessMixin as Mixin,
  EmergencyServiceMixin as Mixin];
