import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserCheckinsMixin } from '../lib/UserCheckins';
import { UserInteractionMixin } from '../lib/UserInteraction';

export const UserCheckinsBundle = [
  UserCheckinsMixin as Mixin,
  UserInteractionMixin as Mixin];
