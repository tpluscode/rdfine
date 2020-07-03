import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserCheckinsMixin } from '../UserCheckins';

export const UserCheckinsBundle = [
  UserInteractionMixin as Mixin,
  UserCheckinsMixin as Mixin];
