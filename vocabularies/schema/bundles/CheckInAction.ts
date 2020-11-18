import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { CheckInActionMixin } from '../lib/CheckInAction';

export const CheckInActionBundle = [
  CommunicateActionMixin as Mixin,
  CheckInActionMixin as Mixin];
