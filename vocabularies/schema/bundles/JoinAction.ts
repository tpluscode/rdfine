import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { JoinActionMixin } from '../lib/JoinAction';
import { EventMixin } from '../lib/Event';

export const JoinActionBundle = [
  InteractActionMixin as Mixin,
  JoinActionMixin as Mixin,
  EventMixin as Mixin];
