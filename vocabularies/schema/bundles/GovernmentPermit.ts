import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentPermitMixin } from '../lib/GovernmentPermit';
import { PermitMixin } from '../lib/Permit';

export const GovernmentPermitBundle = [
  GovernmentPermitMixin as Mixin,
  PermitMixin as Mixin];
