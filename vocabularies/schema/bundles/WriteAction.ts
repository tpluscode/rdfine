import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { LanguageMixin } from '../lib/Language';
import { WriteActionMixin } from '../lib/WriteAction';

export const WriteActionBundle = [
  CreateActionMixin as Mixin,
  LanguageMixin as Mixin,
  WriteActionMixin as Mixin];
