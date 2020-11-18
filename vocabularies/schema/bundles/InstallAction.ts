import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { InstallActionMixin } from '../lib/InstallAction';

export const InstallActionBundle = [
  ConsumeActionMixin as Mixin,
  InstallActionMixin as Mixin];
