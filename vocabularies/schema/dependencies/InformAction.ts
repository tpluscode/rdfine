import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { InformActionMixin } from '../InformAction';
import { EventMixin } from '../Event';

export const InformActionDependencies = [
  CommunicateActionMixin as Mixin,
  InformActionMixin as Mixin,
  EventMixin as Mixin];
