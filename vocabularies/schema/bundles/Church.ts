import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChurchMixin } from '../lib/Church';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';

export const ChurchBundle = [
  ChurchMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
