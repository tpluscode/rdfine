import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BuddhistTempleMixin } from '../lib/BuddhistTemple';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';

export const BuddhistTempleBundle = [
  BuddhistTempleMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
