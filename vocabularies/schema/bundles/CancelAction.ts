import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CancelActionMixin } from '../lib/CancelAction';
import { PlanActionMixin } from '../lib/PlanAction';

export const CancelActionBundle = [
  CancelActionMixin as Mixin,
  PlanActionMixin as Mixin];
