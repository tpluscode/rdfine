import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PermitMixin } from '../lib/Permit';
import { GovernmentPermitMixin } from '../lib/GovernmentPermit';

export const GovernmentPermitBundle = [
  PermitMixin as Mixin,
  GovernmentPermitMixin as Mixin];
