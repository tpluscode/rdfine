import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentOfficeMixin } from '../lib/GovernmentOffice';
import { PostOfficeMixin } from '../lib/PostOffice';

export const PostOfficeBundle = [
  GovernmentOfficeMixin as Mixin,
  PostOfficeMixin as Mixin];
