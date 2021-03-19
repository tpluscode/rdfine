import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { ProfileMixin } from '../lib/Profile';

export const ProfileBundle = [
  ObjectMixin as Mixin,
  ProfileMixin as Mixin];
