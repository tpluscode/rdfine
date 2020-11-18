import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { CommentActionMixin } from '../lib/CommentAction';
import { CommentMixin } from '../lib/Comment';

export const CommentActionBundle = [
  CommunicateActionMixin as Mixin,
  CommentActionMixin as Mixin,
  CommentMixin as Mixin];
