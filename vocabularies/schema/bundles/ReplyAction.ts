import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { ReplyActionMixin } from '../ReplyAction';
import { CommentMixin } from '../Comment';

export const ReplyActionBundle = [
  CommunicateActionMixin as Mixin,
  ReplyActionMixin as Mixin,
  CommentMixin as Mixin];
