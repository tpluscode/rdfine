import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { LeaveActionMixin } from '../LeaveAction';
import { EventMixin } from '../Event';

export const LeaveActionBundle = [
  InteractActionMixin as Mixin,
  LeaveActionMixin as Mixin,
  EventMixin as Mixin];
