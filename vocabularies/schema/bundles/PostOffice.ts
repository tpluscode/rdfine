import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentOfficeMixin } from '../GovernmentOffice';
import { PostOfficeMixin } from '../PostOffice';

export const PostOfficeBundle = [
  GovernmentOfficeMixin as Mixin,
  PostOfficeMixin as Mixin];
