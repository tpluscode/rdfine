import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { CheckOutActionMixin } from '../CheckOutAction';

export const CheckOutActionDependencies = [
  CommunicateActionMixin as Mixin,
  CheckOutActionMixin as Mixin];