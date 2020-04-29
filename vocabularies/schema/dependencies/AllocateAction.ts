import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../OrganizeAction';
import { AllocateActionMixin } from '../AllocateAction';

export const AllocateActionDependencies = [
  OrganizeActionMixin as Mixin,
  AllocateActionMixin as Mixin];
