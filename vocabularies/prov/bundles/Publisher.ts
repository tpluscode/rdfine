import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublisherMixin } from '../lib/Publisher';
import { RoleMixin } from '../lib/Role';

export const PublisherBundle = [
  PublisherMixin as Mixin,
  RoleMixin as Mixin];
