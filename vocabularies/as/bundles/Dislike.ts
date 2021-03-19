import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { DislikeMixin } from '../lib/Dislike';

export const DislikeBundle = [
  ActivityMixin as Mixin,
  DislikeMixin as Mixin];
