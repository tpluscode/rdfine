import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { AudienceMixin } from '../lib/Audience';
import { EventMixin } from '../lib/Event';
import { PlayActionMixin } from '../lib/PlayAction';

export const PlayActionBundle = [
  ActionMixin as Mixin,
  AudienceMixin as Mixin,
  EventMixin as Mixin,
  PlayActionMixin as Mixin];
