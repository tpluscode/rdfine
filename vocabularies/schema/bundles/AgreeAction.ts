import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { AgreeActionMixin } from '../lib/AgreeAction';

export const AgreeActionBundle = [
  ReactActionMixin as Mixin,
  AgreeActionMixin as Mixin];
