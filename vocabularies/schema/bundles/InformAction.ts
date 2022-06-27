import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { EventMixin } from '../lib/Event';
import { InformActionMixin } from '../lib/InformAction';

export const InformActionBundle = [
  CommunicateActionMixin as Mixin,
  EventMixin as Mixin,
  InformActionMixin as Mixin];
