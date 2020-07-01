import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../OrganizeAction';
import { ApplyActionMixin } from '../ApplyAction';

export const ApplyActionBundle = [
  OrganizeActionMixin as Mixin,
  ApplyActionMixin as Mixin];
