import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { CorrectionCommentMixin } from '../lib/CorrectionComment';

export const CorrectionCommentBundle = [
  CommentMixin as Mixin,
  CorrectionCommentMixin as Mixin];
