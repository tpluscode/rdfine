import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LinkMixin } from '../lib/Link';
import { MentionMixin } from '../lib/Mention';

export const MentionBundle = [
  LinkMixin as Mixin,
  MentionMixin as Mixin];
