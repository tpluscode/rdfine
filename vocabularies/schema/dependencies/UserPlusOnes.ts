import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserPlusOnesMixin } from '../UserPlusOnes';

export const UserPlusOnesDependencies = [
  UserInteractionMixin as Mixin,
  UserPlusOnesMixin as Mixin];
