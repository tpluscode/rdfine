import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';
import { GenerationMixin } from '../lib/Generation';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';

export const GenerationBundle = [
  ActivityInfluenceMixin as Mixin,
  GenerationMixin as Mixin,
  InstantaneousEventMixin as Mixin];
