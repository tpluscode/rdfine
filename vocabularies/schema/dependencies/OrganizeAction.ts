import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { OrganizeActionMixin } from '../OrganizeAction';

export const OrganizeActionDependencies = [
  ActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
