import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { PersonMixin } from '../lib/Person';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { MediaObjectMixin } from '../lib/MediaObject';
import { AudienceMixin } from '../lib/Audience';
import { AudioObjectMixin } from '../lib/AudioObject';
import { ClipMixin } from '../lib/Clip';
import { MusicRecordingMixin } from '../lib/MusicRecording';
import { OrganizationMixin } from '../lib/Organization';
import { CommentMixin } from '../lib/Comment';
import { PlaceMixin } from '../lib/Place';
import { RatingMixin } from '../lib/Rating';
import { CorrectionCommentMixin } from '../lib/CorrectionComment';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { LanguageMixin } from '../lib/Language';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { ProductMixin } from '../lib/Product';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { PublicationEventMixin } from '../lib/PublicationEvent';
import { EventMixin } from '../lib/Event';
import { ReviewMixin } from '../lib/Review';
import { DurationMixin } from '../lib/Duration';
import { VideoObjectMixin } from '../lib/VideoObject';

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
  CorrectionCommentMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  LanguageMixin as Mixin,
  InteractionCounterMixin as Mixin,
  ProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  PublicationEventMixin as Mixin,
  EventMixin as Mixin,
  ReviewMixin as Mixin,
  DurationMixin as Mixin,
  VideoObjectMixin as Mixin];
