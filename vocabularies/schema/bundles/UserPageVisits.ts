import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserPageVisitsMixin } from '../UserPageVisits';

export const UserPageVisitsBundle = [
  UserInteractionMixin as Mixin,
  UserPageVisitsMixin as Mixin];
