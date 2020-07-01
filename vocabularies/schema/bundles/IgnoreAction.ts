import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { IgnoreActionMixin } from '../IgnoreAction';

export const IgnoreActionBundle = [
  AssessActionMixin as Mixin,
  IgnoreActionMixin as Mixin];
