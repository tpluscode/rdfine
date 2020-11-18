import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserPageVisitsMixin } from '../lib/UserPageVisits';

export const UserPageVisitsBundle = [
  UserInteractionMixin as Mixin,
  UserPageVisitsMixin as Mixin];
