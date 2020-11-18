import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { FollowActionMixin } from '../lib/FollowAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const FollowActionBundle = [
  InteractActionMixin as Mixin,
  FollowActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
