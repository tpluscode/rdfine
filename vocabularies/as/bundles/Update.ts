import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { UpdateMixin } from '../lib/Update';

export const UpdateBundle = [
  ActivityMixin as Mixin,
  UpdateMixin as Mixin];
