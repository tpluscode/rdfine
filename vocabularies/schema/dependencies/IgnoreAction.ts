import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { IgnoreActionMixin } from '../IgnoreAction';

export const IgnoreActionDependencies = [
  AssessActionMixin as Mixin,
  IgnoreActionMixin as Mixin];
