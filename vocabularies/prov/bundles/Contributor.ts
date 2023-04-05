import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContributorMixin } from '../lib/Contributor';
import { RoleMixin } from '../lib/Role';

export const ContributorBundle = [
  ContributorMixin as Mixin,
  RoleMixin as Mixin];
