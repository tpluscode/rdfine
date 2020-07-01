import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../PlanAction';
import { CancelActionMixin } from '../CancelAction';

export const CancelActionBundle = [
  PlanActionMixin as Mixin,
  CancelActionMixin as Mixin];
