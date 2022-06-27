import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RightsHolderMixin } from '../lib/RightsHolder';
import { RoleMixin } from '../lib/Role';

export const RightsHolderBundle = [
  RightsHolderMixin as Mixin,
  RoleMixin as Mixin];
