import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PermitMixin } from '../Permit';
import { GovernmentPermitMixin } from '../GovernmentPermit';

export const GovernmentPermitDependencies = [
  PermitMixin as Mixin,
  GovernmentPermitMixin as Mixin];
