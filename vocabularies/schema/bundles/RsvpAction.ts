import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { InformActionMixin } from '../lib/InformAction';
import { RsvpActionMixin } from '../lib/RsvpAction';

export const RsvpActionBundle = [
  CommentMixin as Mixin,
  InformActionMixin as Mixin,
  RsvpActionMixin as Mixin];
