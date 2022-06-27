import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DisagreeActionMixin } from '../lib/DisagreeAction';
import { ReactActionMixin } from '../lib/ReactAction';

export const DisagreeActionBundle = [
  DisagreeActionMixin as Mixin,
  ReactActionMixin as Mixin];
