import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DataFeedMixin } from '../lib/DataFeed';
import { DatasetMixin } from '../lib/Dataset';
import { GovernmentServiceMixin } from '../lib/GovernmentService';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ObservationMixin } from '../lib/Observation';
import { SpecialAnnouncementMixin } from '../lib/SpecialAnnouncement';
import { ThingMixin } from '../lib/Thing';
import { WebContentMixin } from '../lib/WebContent';

export const SpecialAnnouncementBundle = [
  CivicStructureMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DataFeedMixin as Mixin,
  DatasetMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  LocalBusinessMixin as Mixin,
  ObservationMixin as Mixin,
  SpecialAnnouncementMixin as Mixin,
  ThingMixin as Mixin,
  WebContentMixin as Mixin];
