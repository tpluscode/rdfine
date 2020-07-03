import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { WriteActionMixin } from '../WriteAction';
import { LanguageMixin } from '../Language';

export const WriteActionBundle = [
  CreateActionMixin as Mixin,
  WriteActionMixin as Mixin,
  LanguageMixin as Mixin];
