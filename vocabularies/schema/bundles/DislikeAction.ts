import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DislikeActionMixin } from '../lib/DislikeAction';
import { ReactActionMixin } from '../lib/ReactAction';

export const DislikeActionBundle = [
  DislikeActionMixin as Mixin,
  ReactActionMixin as Mixin];
