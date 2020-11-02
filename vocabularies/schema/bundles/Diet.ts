import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { LifestyleModificationMixin } from '../LifestyleModification';
import { DietMixin } from '../Diet';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const DietBundle = [
  CreativeWorkMixin as Mixin,
  LifestyleModificationMixin as Mixin,
  DietMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
