import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { SeekToActionMixin } from '../lib/SeekToAction';

export const SeekToActionBundle = [
  ActionMixin as Mixin,
  SeekToActionMixin as Mixin];
