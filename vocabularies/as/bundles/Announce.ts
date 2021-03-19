import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AnnounceMixin } from '../lib/Announce';

export const AnnounceBundle = [
  ActivityMixin as Mixin,
  AnnounceMixin as Mixin];
