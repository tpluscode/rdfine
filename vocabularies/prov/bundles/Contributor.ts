import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { ContributorMixin } from '../lib/Contributor';

export const ContributorBundle = [
  RoleMixin as Mixin,
  ContributorMixin as Mixin];
