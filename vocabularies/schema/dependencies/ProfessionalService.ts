import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ProfessionalServiceMixin } from '../ProfessionalService';

export const ProfessionalServiceDependencies = [
  LocalBusinessMixin as Mixin,
  ProfessionalServiceMixin as Mixin];
