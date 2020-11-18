import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../lib/OrganizeAction';
import { ApplyActionMixin } from '../lib/ApplyAction';

export const ApplyActionBundle = [
  OrganizeActionMixin as Mixin,
  ApplyActionMixin as Mixin];
