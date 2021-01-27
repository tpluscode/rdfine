import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { SubmitMixin } from '../lib/Submit';

export const SubmitBundle = [
  ActivityMixin as Mixin,
  SubmitMixin as Mixin];
