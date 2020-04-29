import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { LegalServiceMixin } from '../LegalService';

export const LegalServiceDependencies = [
  LocalBusinessMixin as Mixin,
  LegalServiceMixin as Mixin];
