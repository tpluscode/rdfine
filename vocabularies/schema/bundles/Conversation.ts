import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConversationMixin } from '../lib/Conversation';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const ConversationBundle = [
  ConversationMixin as Mixin,
  CreativeWorkMixin as Mixin];
