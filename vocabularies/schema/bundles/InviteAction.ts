import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { InviteActionMixin } from '../InviteAction';
import { EventMixin } from '../Event';

export const InviteActionBundle = [
  CommunicateActionMixin as Mixin,
  InviteActionMixin as Mixin,
  EventMixin as Mixin];
