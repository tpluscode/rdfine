import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { WantActionMixin } from '../WantAction';

export const WantActionBundle = [
  ReactActionMixin as Mixin,
  WantActionMixin as Mixin];
