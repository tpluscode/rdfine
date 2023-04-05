import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CheckOutActionMixin } from '../lib/CheckOutAction';
import { CommunicateActionMixin } from '../lib/CommunicateAction';

export const CheckOutActionBundle = [
  CheckOutActionMixin as Mixin,
  CommunicateActionMixin as Mixin];
