import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LikeActionMixin } from '../lib/LikeAction';
import { ReactActionMixin } from '../lib/ReactAction';

export const LikeActionBundle = [
  LikeActionMixin as Mixin,
  ReactActionMixin as Mixin];
