import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { RightsHolderMixin } from '../lib/RightsHolder';

export const RightsHolderBundle = [
  RoleMixin as Mixin,
  RightsHolderMixin as Mixin];
