import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { ChooseActionMixin } from '../ChooseAction';
import { ThingMixin } from '../Thing';

export const ChooseActionDependencies = [
  AssessActionMixin as Mixin,
  ChooseActionMixin as Mixin,
  ThingMixin as Mixin];
