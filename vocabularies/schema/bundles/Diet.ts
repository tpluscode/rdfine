import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DietMixin } from '../lib/Diet';
import { LifestyleModificationMixin } from '../lib/LifestyleModification';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const DietBundle = [
  CreativeWorkMixin as Mixin,
  DietMixin as Mixin,
  LifestyleModificationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
