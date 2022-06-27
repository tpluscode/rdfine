import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { CategoryCodeSetMixin } from '../lib/CategoryCodeSet';
import { DefinedTermSetMixin } from '../lib/DefinedTermSet';

export const CategoryCodeSetBundle = [
  CategoryCodeMixin as Mixin,
  CategoryCodeSetMixin as Mixin,
  DefinedTermSetMixin as Mixin];
