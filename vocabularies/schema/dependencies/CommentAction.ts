import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { CommentActionMixin } from '../CommentAction';
import { CommentMixin } from '../Comment';

export const CommentActionDependencies = [
  CommunicateActionMixin as Mixin,
  CommentActionMixin as Mixin,
  CommentMixin as Mixin];
