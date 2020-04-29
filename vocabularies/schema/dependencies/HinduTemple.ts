import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { HinduTempleMixin } from '../HinduTemple';

export const HinduTempleDependencies = [
  PlaceOfWorshipMixin as Mixin,
  HinduTempleMixin as Mixin];
