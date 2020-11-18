import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { WantActionMixin } from '../lib/WantAction';

export const WantActionBundle = [
  ReactActionMixin as Mixin,
  WantActionMixin as Mixin];
