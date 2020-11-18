import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../lib/LegalService';
import { AttorneyMixin } from '../lib/Attorney';

export const AttorneyBundle = [
  LegalServiceMixin as Mixin,
  AttorneyMixin as Mixin];
