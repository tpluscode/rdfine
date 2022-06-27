import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserDownloadsMixin } from '../lib/UserDownloads';
import { UserInteractionMixin } from '../lib/UserInteraction';

export const UserDownloadsBundle = [
  UserDownloadsMixin as Mixin,
  UserInteractionMixin as Mixin];
