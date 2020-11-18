import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { LeaveActionMixin } from '../lib/LeaveAction';
import { EventMixin } from '../lib/Event';

export const LeaveActionBundle = [
  InteractActionMixin as Mixin,
  LeaveActionMixin as Mixin,
  EventMixin as Mixin];
