import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LifestyleModificationMixin } from '../lib/LifestyleModification';
import { DietMixin } from '../lib/Diet';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const DietBundle = [
  CreativeWorkMixin as Mixin,
  LifestyleModificationMixin as Mixin,
  DietMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
