import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { InformActionMixin } from '../lib/InformAction';
import { EventMixin } from '../lib/Event';

export const InformActionBundle = [
  CommunicateActionMixin as Mixin,
  InformActionMixin as Mixin,
  EventMixin as Mixin];
