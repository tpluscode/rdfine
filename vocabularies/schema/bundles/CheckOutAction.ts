import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { CheckOutActionMixin } from '../CheckOutAction';

export const CheckOutActionBundle = [
  CommunicateActionMixin as Mixin,
  CheckOutActionMixin as Mixin];
