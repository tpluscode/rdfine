import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserCheckinsMixin } from '../UserCheckins';

export const UserCheckinsDependencies = [
  UserInteractionMixin as Mixin,
  UserCheckinsMixin as Mixin];
