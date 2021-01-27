import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityMixin } from '../lib/Entity';
import { PlanMixin } from '../lib/Plan';

export const PlanBundle = [
  EntityMixin as Mixin,
  PlanMixin as Mixin];
