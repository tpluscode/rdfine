import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegalServiceMixin } from '../lib/LegalService';
import { NotaryMixin } from '../lib/Notary';

export const NotaryBundle = [
  LegalServiceMixin as Mixin,
  NotaryMixin as Mixin];
