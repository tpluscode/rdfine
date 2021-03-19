import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ViewMixin } from '../lib/View';

export const ViewBundle = [
  ActivityMixin as Mixin,
  ViewMixin as Mixin];
