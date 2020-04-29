import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { BuddhistTempleMixin } from '../BuddhistTemple';

export const BuddhistTempleDependencies = [
  PlaceOfWorshipMixin as Mixin,
  BuddhistTempleMixin as Mixin];
