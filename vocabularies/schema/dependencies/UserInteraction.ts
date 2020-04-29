import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { UserInteractionMixin } from '../UserInteraction';

export const UserInteractionDependencies = [
  EventMixin as Mixin,
  UserInteractionMixin as Mixin];
