import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../lib/OrganizeAction';
import { PlanActionMixin } from '../lib/PlanAction';

export const PlanActionBundle = [
  OrganizeActionMixin as Mixin,
  PlanActionMixin as Mixin];
