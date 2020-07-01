import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { ViewActionMixin } from '../ViewAction';

export const ViewActionBundle = [
  ConsumeActionMixin as Mixin,
  ViewActionMixin as Mixin];
