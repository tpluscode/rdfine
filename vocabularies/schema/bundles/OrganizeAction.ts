import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { OrganizeActionMixin } from '../OrganizeAction';

export const OrganizeActionBundle = [
  ActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
