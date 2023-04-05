import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CheckInActionMixin } from '../lib/CheckInAction';
import { CommunicateActionMixin } from '../lib/CommunicateAction';

export const CheckInActionBundle = [
  CheckInActionMixin as Mixin,
  CommunicateActionMixin as Mixin];
