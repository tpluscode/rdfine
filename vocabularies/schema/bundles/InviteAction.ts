import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { InviteActionMixin } from '../lib/InviteAction';
import { EventMixin } from '../lib/Event';

export const InviteActionBundle = [
  CommunicateActionMixin as Mixin,
  InviteActionMixin as Mixin,
  EventMixin as Mixin];
