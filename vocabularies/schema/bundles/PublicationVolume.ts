import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PublicationVolumeMixin } from '../lib/PublicationVolume';

export const PublicationVolumeBundle = [
  CreativeWorkMixin as Mixin,
  PublicationVolumeMixin as Mixin];
