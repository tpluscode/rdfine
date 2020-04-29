import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserCommentsMixin } from '../UserComments';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { CreativeWorkMixin } from '../CreativeWork';

export const UserCommentsDependencies = [
  UserInteractionMixin as Mixin,
  UserCommentsMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkMixin as Mixin];
