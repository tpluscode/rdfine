import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../LegalService';
import { AttorneyMixin } from '../Attorney';

export const AttorneyDependencies = [
  LegalServiceMixin as Mixin,
  AttorneyMixin as Mixin];
