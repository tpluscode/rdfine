import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { DislikeActionMixin } from '../lib/DislikeAction';

export const DislikeActionBundle = [
  ReactActionMixin as Mixin,
  DislikeActionMixin as Mixin];
