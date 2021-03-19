import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AddMixin } from '../lib/Add';

export const AddBundle = [
  ActivityMixin as Mixin,
  AddMixin as Mixin];
