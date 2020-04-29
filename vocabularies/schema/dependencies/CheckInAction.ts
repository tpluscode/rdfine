import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { CheckInActionMixin } from '../CheckInAction';

export const CheckInActionDependencies = [
  CommunicateActionMixin as Mixin,
  CheckInActionMixin as Mixin];
