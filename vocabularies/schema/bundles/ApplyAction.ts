import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApplyActionMixin } from '../lib/ApplyAction';
import { OrganizeActionMixin } from '../lib/OrganizeAction';

export const ApplyActionBundle = [
  ApplyActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
