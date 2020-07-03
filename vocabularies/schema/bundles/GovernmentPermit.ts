import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PermitMixin } from '../Permit';
import { GovernmentPermitMixin } from '../GovernmentPermit';

export const GovernmentPermitBundle = [
  PermitMixin as Mixin,
  GovernmentPermitMixin as Mixin];
