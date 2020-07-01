import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../LegalService';
import { AttorneyMixin } from '../Attorney';

export const AttorneyBundle = [
  LegalServiceMixin as Mixin,
  AttorneyMixin as Mixin];
