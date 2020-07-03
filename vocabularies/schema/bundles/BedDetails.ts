import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { BedDetailsMixin } from '../BedDetails';

export const BedDetailsBundle = [
  IntangibleMixin as Mixin,
  BedDetailsMixin as Mixin];
