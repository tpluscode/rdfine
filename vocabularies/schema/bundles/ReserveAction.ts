import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../lib/PlanAction';
import { ReserveActionMixin } from '../lib/ReserveAction';

export const ReserveActionBundle = [
  PlanActionMixin as Mixin,
  ReserveActionMixin as Mixin];
