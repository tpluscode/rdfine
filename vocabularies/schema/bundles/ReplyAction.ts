import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { ReplyActionMixin } from '../lib/ReplyAction';
import { CommentMixin } from '../lib/Comment';

export const ReplyActionBundle = [
  CommunicateActionMixin as Mixin,
  ReplyActionMixin as Mixin,
  CommentMixin as Mixin];
