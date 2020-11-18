import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';
import { BuddhistTempleMixin } from '../lib/BuddhistTemple';

export const BuddhistTempleBundle = [
  PlaceOfWorshipMixin as Mixin,
  BuddhistTempleMixin as Mixin];
