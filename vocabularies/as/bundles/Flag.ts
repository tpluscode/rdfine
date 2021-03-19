import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { FlagMixin } from '../lib/Flag';

export const FlagBundle = [
  ActivityMixin as Mixin,
  FlagMixin as Mixin];
