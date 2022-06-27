import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { ReplyActionMixin } from '../lib/ReplyAction';

export const ReplyActionBundle = [
  CommentMixin as Mixin,
  CommunicateActionMixin as Mixin,
  ReplyActionMixin as Mixin];
