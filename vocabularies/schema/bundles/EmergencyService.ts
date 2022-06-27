import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const EmergencyServiceBundle = [
  EmergencyServiceMixin as Mixin,
  LocalBusinessMixin as Mixin];
