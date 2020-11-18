import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { BedDetailsMixin } from '../lib/BedDetails';

export const BedDetailsBundle = [
  IntangibleMixin as Mixin,
  BedDetailsMixin as Mixin];
