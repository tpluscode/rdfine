import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { ProfilePageMixin } from '../ProfilePage';

export const ProfilePageBundle = [
  WebPageMixin as Mixin,
  ProfilePageMixin as Mixin];
