import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { PublisherMixin } from '../lib/Publisher';

export const PublisherBundle = [
  RoleMixin as Mixin,
  PublisherMixin as Mixin];
