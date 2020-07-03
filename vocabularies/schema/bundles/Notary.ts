import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../LegalService';
import { NotaryMixin } from '../Notary';

export const NotaryBundle = [
  LegalServiceMixin as Mixin,
  NotaryMixin as Mixin];
