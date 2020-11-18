import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { ProfilePageMixin } from '../lib/ProfilePage';

export const ProfilePageBundle = [
  WebPageMixin as Mixin,
  ProfilePageMixin as Mixin];
