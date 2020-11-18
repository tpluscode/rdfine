import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ConversationMixin } from '../lib/Conversation';

export const ConversationBundle = [
  CreativeWorkMixin as Mixin,
  ConversationMixin as Mixin];
