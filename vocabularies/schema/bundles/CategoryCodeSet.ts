import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedTermSetMixin } from '../lib/DefinedTermSet';
import { CategoryCodeSetMixin } from '../lib/CategoryCodeSet';
import { CategoryCodeMixin } from '../lib/CategoryCode';

export const CategoryCodeSetBundle = [
  DefinedTermSetMixin as Mixin,
  CategoryCodeSetMixin as Mixin,
  CategoryCodeMixin as Mixin];
