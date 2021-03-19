import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { LikeMixin } from '../lib/Like';

export const LikeBundle = [
  ActivityMixin as Mixin,
  LikeMixin as Mixin];
