import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { HyperTocEntryMixin } from '../lib/HyperTocEntry';
import { SeekToActionMixin } from '../lib/SeekToAction';

export const SeekToActionBundle = [
  ActionMixin as Mixin,
  HyperTocEntryMixin as Mixin,
  SeekToActionMixin as Mixin];
