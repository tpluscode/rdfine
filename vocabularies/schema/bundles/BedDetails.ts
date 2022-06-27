import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BedDetailsMixin } from '../lib/BedDetails';
import { IntangibleMixin } from '../lib/Intangible';

export const BedDetailsBundle = [
  BedDetailsMixin as Mixin,
  IntangibleMixin as Mixin];
