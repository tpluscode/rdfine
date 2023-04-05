import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProfilePageMixin } from '../lib/ProfilePage';
import { WebPageMixin } from '../lib/WebPage';

export const ProfilePageBundle = [
  ProfilePageMixin as Mixin,
  WebPageMixin as Mixin];
