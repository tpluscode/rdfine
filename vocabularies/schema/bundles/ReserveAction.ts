import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../PlanAction';
import { ReserveActionMixin } from '../ReserveAction';

export const ReserveActionBundle = [
  PlanActionMixin as Mixin,
  ReserveActionMixin as Mixin];
