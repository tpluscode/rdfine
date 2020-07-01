import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { ReactActionMixin } from '../ReactAction';

export const ReactActionBundle = [
  AssessActionMixin as Mixin,
  ReactActionMixin as Mixin];
