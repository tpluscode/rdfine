import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FamilyMixin } from '../lib/Family';
import { FamilyTypeMixin } from '../lib/FamilyType';
import { GroupMixin } from '../lib/Group';

export const FamilyBundle = [
  FamilyMixin as Mixin,
  FamilyTypeMixin as Mixin,
  GroupMixin as Mixin];
