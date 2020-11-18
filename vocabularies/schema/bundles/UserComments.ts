import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserCommentsMixin } from '../lib/UserComments';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const UserCommentsBundle = [
  UserInteractionMixin as Mixin,
  UserCommentsMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkMixin as Mixin];
