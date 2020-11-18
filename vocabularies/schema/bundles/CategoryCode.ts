import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { CategoryCodeSetMixin } from '../lib/CategoryCodeSet';

export const CategoryCodeBundle = [
  CategoryCodeMixin as Mixin,
  CategoryCodeSetMixin as Mixin];
