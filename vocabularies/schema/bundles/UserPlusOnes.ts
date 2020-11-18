import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserPlusOnesMixin } from '../lib/UserPlusOnes';

export const UserPlusOnesBundle = [
  UserInteractionMixin as Mixin,
  UserPlusOnesMixin as Mixin];
