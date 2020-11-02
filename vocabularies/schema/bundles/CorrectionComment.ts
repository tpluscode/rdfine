import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../Comment';
import { CorrectionCommentMixin } from '../CorrectionComment';

export const CorrectionCommentBundle = [
  CommentMixin as Mixin,
  CorrectionCommentMixin as Mixin];
