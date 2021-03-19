import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { CreateMixin } from '../lib/Create';

export const CreateBundle = [
  ActivityMixin as Mixin,
  CreateMixin as Mixin];
