import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { PlayActionMixin } from '../lib/PlayAction';
import { AudienceMixin } from '../lib/Audience';
import { EventMixin } from '../lib/Event';

export const PlayActionBundle = [
  ActionMixin as Mixin,
  PlayActionMixin as Mixin,
  AudienceMixin as Mixin,
  EventMixin as Mixin];
