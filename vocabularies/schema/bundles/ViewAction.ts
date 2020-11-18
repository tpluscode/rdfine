import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { ViewActionMixin } from '../lib/ViewAction';

export const ViewActionBundle = [
  ConsumeActionMixin as Mixin,
  ViewActionMixin as Mixin];
