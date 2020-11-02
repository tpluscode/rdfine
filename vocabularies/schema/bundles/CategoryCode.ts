import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../CategoryCode';
import { CategoryCodeSetMixin } from '../CategoryCodeSet';

export const CategoryCodeBundle = [
  CategoryCodeMixin as Mixin,
  CategoryCodeSetMixin as Mixin];
