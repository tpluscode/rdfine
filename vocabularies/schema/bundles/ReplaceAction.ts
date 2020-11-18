import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../lib/UpdateAction';
import { ReplaceActionMixin } from '../lib/ReplaceAction';
import { ThingMixin } from '../lib/Thing';

export const ReplaceActionBundle = [
  UpdateActionMixin as Mixin,
  ReplaceActionMixin as Mixin,
  ThingMixin as Mixin];
