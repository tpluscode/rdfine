import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { GroupMixin } from '../lib/Group';

export const GroupBundle = [
  ObjectMixin as Mixin,
  GroupMixin as Mixin];
