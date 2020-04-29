import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserDownloadsMixin } from '../UserDownloads';

export const UserDownloadsDependencies = [
  UserInteractionMixin as Mixin,
  UserDownloadsMixin as Mixin];
