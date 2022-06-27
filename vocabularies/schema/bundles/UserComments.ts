import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { UserCommentsMixin } from '../lib/UserComments';
import { UserInteractionMixin } from '../lib/UserInteraction';

export const UserCommentsBundle = [
  CreativeWorkMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  UserCommentsMixin as Mixin,
  UserInteractionMixin as Mixin];
