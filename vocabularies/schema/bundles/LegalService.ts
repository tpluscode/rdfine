import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { LegalServiceMixin } from '../lib/LegalService';

export const LegalServiceBundle = [
  LocalBusinessMixin as Mixin,
  LegalServiceMixin as Mixin];
