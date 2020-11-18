import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InformActionMixin } from '../lib/InformAction';
import { RsvpActionMixin } from '../lib/RsvpAction';
import { CommentMixin } from '../lib/Comment';

export const RsvpActionBundle = [
  InformActionMixin as Mixin,
  RsvpActionMixin as Mixin,
  CommentMixin as Mixin];
