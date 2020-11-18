import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../lib/AssessAction';
import { ChooseActionMixin } from '../lib/ChooseAction';
import { ThingMixin } from '../lib/Thing';

export const ChooseActionBundle = [
  AssessActionMixin as Mixin,
  ChooseActionMixin as Mixin,
  ThingMixin as Mixin];
