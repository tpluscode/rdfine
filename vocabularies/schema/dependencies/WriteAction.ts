import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { WriteActionMixin } from '../WriteAction';
import { LanguageMixin } from '../Language';

export const WriteActionDependencies = [
  CreateActionMixin as Mixin,
  WriteActionMixin as Mixin,
  LanguageMixin as Mixin];
