import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SpecialAnnouncementMixin } from '../lib/SpecialAnnouncement';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ThingMixin } from '../lib/Thing';
import { WebContentMixin } from '../lib/WebContent';
import { DatasetMixin } from '../lib/Dataset';
import { ObservationMixin } from '../lib/Observation';
import { GovernmentServiceMixin } from '../lib/GovernmentService';
import { DataFeedMixin } from '../lib/DataFeed';

export const SpecialAnnouncementBundle = [
  CreativeWorkMixin as Mixin,
  SpecialAnnouncementMixin as Mixin,
  CivicStructureMixin as Mixin,
  LocalBusinessMixin as Mixin,
  ThingMixin as Mixin,
  WebContentMixin as Mixin,
  DatasetMixin as Mixin,
  ObservationMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  DataFeedMixin as Mixin];
