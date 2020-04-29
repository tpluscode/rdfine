import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { PlayActionMixin } from '../PlayAction';
import { AudienceMixin } from '../Audience';
import { EventMixin } from '../Event';

export const PlayActionDependencies = [
  ActionMixin as Mixin,
  PlayActionMixin as Mixin,
  AudienceMixin as Mixin,
  EventMixin as Mixin];
