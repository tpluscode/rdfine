import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SpecialAnnouncementMixin } from '../SpecialAnnouncement';
import { CivicStructureMixin } from '../CivicStructure';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ThingMixin } from '../Thing';
import { WebContentMixin } from '../WebContent';
import { DatasetMixin } from '../Dataset';
import { ObservationMixin } from '../Observation';
import { GovernmentServiceMixin } from '../GovernmentService';
import { DataFeedMixin } from '../DataFeed';

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
