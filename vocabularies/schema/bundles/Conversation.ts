import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ConversationMixin } from '../Conversation';

export const ConversationBundle = [
  CreativeWorkMixin as Mixin,
  ConversationMixin as Mixin];
