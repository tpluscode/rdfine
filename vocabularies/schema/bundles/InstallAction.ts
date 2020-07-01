import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { InstallActionMixin } from '../InstallAction';

export const InstallActionBundle = [
  ConsumeActionMixin as Mixin,
  InstallActionMixin as Mixin];
