import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GroupMixin } from '../lib/Group';
import { ObjectMixin } from '../lib/Object';

export const GroupBundle = [
  GroupMixin as Mixin,
  ObjectMixin as Mixin];
