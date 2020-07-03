import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { ChurchMixin } from '../Church';

export const ChurchBundle = [
  PlaceOfWorshipMixin as Mixin,
  ChurchMixin as Mixin];
