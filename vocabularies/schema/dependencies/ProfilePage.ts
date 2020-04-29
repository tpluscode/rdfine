import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { ProfilePageMixin } from '../ProfilePage';

export const ProfilePageDependencies = [
  WebPageMixin as Mixin,
  ProfilePageMixin as Mixin];
