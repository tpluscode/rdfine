import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { HinduTempleMixin } from '../HinduTemple';

export const HinduTempleBundle = [
  PlaceOfWorshipMixin as Mixin,
  HinduTempleMixin as Mixin];
