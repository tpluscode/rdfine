import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { LikeActionMixin } from '../lib/LikeAction';

export const LikeActionBundle = [
  ReactActionMixin as Mixin,
  LikeActionMixin as Mixin];
