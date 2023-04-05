import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AttorneyMixin } from '../lib/Attorney';
import { LegalServiceMixin } from '../lib/LegalService';

export const AttorneyBundle = [
  AttorneyMixin as Mixin,
  LegalServiceMixin as Mixin];
