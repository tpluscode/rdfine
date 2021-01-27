import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ReplaceMixin } from '../lib/Replace';

export const ReplaceBundle = [
  ActivityMixin as Mixin,
  ReplaceMixin as Mixin];
