import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { CheckActionMixin } from '../CheckAction';

export const CheckActionDependencies = [
  FindActionMixin as Mixin,
  CheckActionMixin as Mixin];
