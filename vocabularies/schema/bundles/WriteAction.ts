import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { WriteActionMixin } from '../lib/WriteAction';
import { LanguageMixin } from '../lib/Language';

export const WriteActionBundle = [
  CreateActionMixin as Mixin,
  WriteActionMixin as Mixin,
  LanguageMixin as Mixin];
