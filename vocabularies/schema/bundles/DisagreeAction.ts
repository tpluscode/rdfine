import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { DisagreeActionMixin } from '../lib/DisagreeAction';

export const DisagreeActionBundle = [
  ReactActionMixin as Mixin,
  DisagreeActionMixin as Mixin];
