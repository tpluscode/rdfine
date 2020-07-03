import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { JoinActionMixin } from '../JoinAction';
import { EventMixin } from '../Event';

export const JoinActionBundle = [
  InteractActionMixin as Mixin,
  JoinActionMixin as Mixin,
  EventMixin as Mixin];
