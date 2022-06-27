import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReplaceActionMixin } from '../lib/ReplaceAction';
import { ThingMixin } from '../lib/Thing';
import { UpdateActionMixin } from '../lib/UpdateAction';

export const ReplaceActionBundle = [
  ReplaceActionMixin as Mixin,
  ThingMixin as Mixin,
  UpdateActionMixin as Mixin];
