import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { SeekToActionMixin } from '../lib/SeekToAction';
import { HyperTocEntryMixin } from '../lib/HyperTocEntry';

export const SeekToActionBundle = [
  ActionMixin as Mixin,
  SeekToActionMixin as Mixin,
  HyperTocEntryMixin as Mixin];
