import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UseActionMixin } from '../lib/UseAction';
import { WearActionMixin } from '../lib/WearAction';

export const WearActionBundle = [
  UseActionMixin as Mixin,
  WearActionMixin as Mixin];
