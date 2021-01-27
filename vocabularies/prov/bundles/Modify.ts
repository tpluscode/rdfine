import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ModifyMixin } from '../lib/Modify';

export const ModifyBundle = [
  ActivityMixin as Mixin,
  ModifyMixin as Mixin];
