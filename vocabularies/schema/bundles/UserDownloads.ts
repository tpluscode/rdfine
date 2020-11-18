import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserDownloadsMixin } from '../lib/UserDownloads';

export const UserDownloadsBundle = [
  UserInteractionMixin as Mixin,
  UserDownloadsMixin as Mixin];
