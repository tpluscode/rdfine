import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { UndoMixin } from '../lib/Undo';

export const UndoBundle = [
  ActivityMixin as Mixin,
  UndoMixin as Mixin];
