import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { CheckInActionMixin } from '../CheckInAction';

export const CheckInActionBundle = [
  CommunicateActionMixin as Mixin,
  CheckInActionMixin as Mixin];
