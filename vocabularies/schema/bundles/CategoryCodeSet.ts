import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefinedTermSetMixin } from '../DefinedTermSet';
import { CategoryCodeSetMixin } from '../CategoryCodeSet';
import { CategoryCodeMixin } from '../CategoryCode';

export const CategoryCodeSetBundle = [
  DefinedTermSetMixin as Mixin,
  CategoryCodeSetMixin as Mixin,
  CategoryCodeMixin as Mixin];
