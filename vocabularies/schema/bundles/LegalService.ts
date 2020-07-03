import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { LegalServiceMixin } from '../LegalService';

export const LegalServiceBundle = [
  LocalBusinessMixin as Mixin,
  LegalServiceMixin as Mixin];
