import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserPlusOnesMixin } from '../UserPlusOnes';

export const UserPlusOnesBundle = [
  UserInteractionMixin as Mixin,
  UserPlusOnesMixin as Mixin];
