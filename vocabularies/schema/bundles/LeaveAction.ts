import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { InteractActionMixin } from '../lib/InteractAction';
import { LeaveActionMixin } from '../lib/LeaveAction';

export const LeaveActionBundle = [
  EventMixin as Mixin,
  InteractActionMixin as Mixin,
  LeaveActionMixin as Mixin];
