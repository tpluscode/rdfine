import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { CheckOutActionMixin } from '../lib/CheckOutAction';

export const CheckOutActionBundle = [
  CommunicateActionMixin as Mixin,
  CheckOutActionMixin as Mixin];
