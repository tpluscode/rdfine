import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { ReactActionMixin } from '../ReactAction';

export const ReactActionDependencies = [
  AssessActionMixin as Mixin,
  ReactActionMixin as Mixin];
