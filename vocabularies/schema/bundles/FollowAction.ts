import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FollowActionMixin } from '../lib/FollowAction';
import { InteractActionMixin } from '../lib/InteractAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const FollowActionBundle = [
  FollowActionMixin as Mixin,
  InteractActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
