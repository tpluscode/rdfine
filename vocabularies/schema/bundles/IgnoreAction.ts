import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../lib/AssessAction';
import { IgnoreActionMixin } from '../lib/IgnoreAction';

export const IgnoreActionBundle = [
  AssessActionMixin as Mixin,
  IgnoreActionMixin as Mixin];
