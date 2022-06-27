import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HinduTempleMixin } from '../lib/HinduTemple';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';

export const HinduTempleBundle = [
  HinduTempleMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
