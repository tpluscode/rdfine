import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../lib/AssessAction';
import { ReactActionMixin } from '../lib/ReactAction';

export const ReactActionBundle = [
  AssessActionMixin as Mixin,
  ReactActionMixin as Mixin];
