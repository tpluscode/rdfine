import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentOfficeMixin } from '../GovernmentOffice';
import { PostOfficeMixin } from '../PostOffice';

export const PostOfficeDependencies = [
  GovernmentOfficeMixin as Mixin,
  PostOfficeMixin as Mixin];
