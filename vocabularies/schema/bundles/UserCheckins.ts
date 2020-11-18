import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserCheckinsMixin } from '../lib/UserCheckins';

export const UserCheckinsBundle = [
  UserInteractionMixin as Mixin,
  UserCheckinsMixin as Mixin];
