import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InformActionMixin } from '../InformAction';
import { RsvpActionMixin } from '../RsvpAction';
import { CommentMixin } from '../Comment';

export const RsvpActionBundle = [
  InformActionMixin as Mixin,
  RsvpActionMixin as Mixin,
  CommentMixin as Mixin];
