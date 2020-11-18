import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';
import { HinduTempleMixin } from '../lib/HinduTemple';

export const HinduTempleBundle = [
  PlaceOfWorshipMixin as Mixin,
  HinduTempleMixin as Mixin];
