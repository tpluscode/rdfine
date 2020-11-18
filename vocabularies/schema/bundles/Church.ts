import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';
import { ChurchMixin } from '../lib/Church';

export const ChurchBundle = [
  PlaceOfWorshipMixin as Mixin,
  ChurchMixin as Mixin];
