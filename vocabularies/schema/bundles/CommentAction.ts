import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentActionMixin } from '../lib/CommentAction';
import { CommentMixin } from '../lib/Comment';
import { CommunicateActionMixin } from '../lib/CommunicateAction';

export const CommentActionBundle = [
  CommentActionMixin as Mixin,
  CommentMixin as Mixin,
  CommunicateActionMixin as Mixin];
