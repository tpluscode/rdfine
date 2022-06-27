import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { InteractActionMixin } from '../lib/InteractAction';
import { JoinActionMixin } from '../lib/JoinAction';

export const JoinActionBundle = [
  EventMixin as Mixin,
  InteractActionMixin as Mixin,
  JoinActionMixin as Mixin];
