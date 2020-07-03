import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserDownloadsMixin } from '../UserDownloads';

export const UserDownloadsBundle = [
  UserInteractionMixin as Mixin,
  UserDownloadsMixin as Mixin];
