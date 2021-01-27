import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { CopyrightMixin } from '../lib/Copyright';

export const CopyrightBundle = [
  ActivityMixin as Mixin,
  CopyrightMixin as Mixin];
