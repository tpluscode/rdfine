import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../LegalService';
import { NotaryMixin } from '../Notary';

export const NotaryDependencies = [
  LegalServiceMixin as Mixin,
  NotaryMixin as Mixin];
