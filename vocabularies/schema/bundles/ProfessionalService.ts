import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ProfessionalServiceMixin } from '../lib/ProfessionalService';

export const ProfessionalServiceBundle = [
  LocalBusinessMixin as Mixin,
  ProfessionalServiceMixin as Mixin];
