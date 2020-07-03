import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { FollowActionMixin } from '../FollowAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const FollowActionBundle = [
  InteractActionMixin as Mixin,
  FollowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
