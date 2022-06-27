import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { EventMixin } from '../lib/Event';
import { InviteActionMixin } from '../lib/InviteAction';

export const InviteActionBundle = [
  CommunicateActionMixin as Mixin,
  EventMixin as Mixin,
  InviteActionMixin as Mixin];
