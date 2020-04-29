import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ConversationMixin } from '../Conversation';

export const ConversationDependencies = [
  CreativeWorkMixin as Mixin,
  ConversationMixin as Mixin];
