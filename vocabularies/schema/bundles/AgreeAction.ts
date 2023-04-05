import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgreeActionMixin } from '../lib/AgreeAction';
import { ReactActionMixin } from '../lib/ReactAction';

export const AgreeActionBundle = [
  AgreeActionMixin as Mixin,
  ReactActionMixin as Mixin];
