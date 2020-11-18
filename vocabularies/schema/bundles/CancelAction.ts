import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../lib/PlanAction';
import { CancelActionMixin } from '../lib/CancelAction';

export const CancelActionBundle = [
  PlanActionMixin as Mixin,
  CancelActionMixin as Mixin];
