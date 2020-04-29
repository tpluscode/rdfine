import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../OrganizeAction';
import { ApplyActionMixin } from '../ApplyAction';

export const ApplyActionDependencies = [
  OrganizeActionMixin as Mixin,
  ApplyActionMixin as Mixin];
