import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { GenerationMixin } from '../lib/Generation';

export const GenerationBundle = [
  ActivityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  GenerationMixin as Mixin];
