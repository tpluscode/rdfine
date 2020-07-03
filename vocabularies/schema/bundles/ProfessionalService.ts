import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ProfessionalServiceMixin } from '../ProfessionalService';

export const ProfessionalServiceBundle = [
  LocalBusinessMixin as Mixin,
  ProfessionalServiceMixin as Mixin];
