import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { DislikeActionMixin } from '../DislikeAction';

export const DislikeActionBundle = [
  ReactActionMixin as Mixin,
  DislikeActionMixin as Mixin];
