import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { CreativeWorkMixin } from '../CreativeWork';
import { ItemListMixin } from '../ItemList';
import { PersonMixin } from '../Person';
import { AggregateRatingMixin } from '../AggregateRating';
import { MediaObjectMixin } from '../MediaObject';
import { AudienceMixin } from '../Audience';
import { AudioObjectMixin } from '../AudioObject';
import { ClipMixin } from '../Clip';
import { MusicRecordingMixin } from '../MusicRecording';
import { OrganizationMixin } from '../Organization';
import { CommentMixin } from '../Comment';
import { PlaceMixin } from '../Place';
import { RatingMixin } from '../Rating';
import { AlignmentObjectMixin } from '../AlignmentObject';
import { LanguageMixin } from '../Language';
import { InteractionCounterMixin } from '../InteractionCounter';
import { ProductMixin } from '../Product';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { PublicationEventMixin } from '../PublicationEvent';
import { EventMixin } from '../Event';
import { ReviewMixin } from '../Review';
import { DurationMixin } from '../Duration';
import { VideoObjectMixin } from '../VideoObject';

export const CreativeWorkBundle = [
  ThingMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  PersonMixin as Mixin,
  AggregateRatingMixin as Mixin,
  MediaObjectMixin as Mixin,
  AudienceMixin as Mixin,
  AudioObjectMixin as Mixin,
  ClipMixin as Mixin,
  MusicRecordingMixin as Mixin,
  OrganizationMixin as Mixin,
  CommentMixin as Mixin,
  PlaceMixin as Mixin,
  RatingMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  LanguageMixin as Mixin,
  InteractionCounterMixin as Mixin,
  ProductMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  PublicationEventMixin as Mixin,
  EventMixin as Mixin,
  ReviewMixin as Mixin,
  DurationMixin as Mixin,
  VideoObjectMixin as Mixin];
