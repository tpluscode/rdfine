import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PublicationVolumeMixin } from '../PublicationVolume';

export const PublicationVolumeBundle = [
  CreativeWorkMixin as Mixin,
  PublicationVolumeMixin as Mixin];
