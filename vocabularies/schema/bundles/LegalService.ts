import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../lib/LegalService';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const LegalServiceBundle = [
  LegalServiceMixin as Mixin,
  LocalBusinessMixin as Mixin];
