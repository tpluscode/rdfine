import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../OrganizeAction';
import { PlanActionMixin } from '../PlanAction';

export const PlanActionDependencies = [
  OrganizeActionMixin as Mixin,
  PlanActionMixin as Mixin];
