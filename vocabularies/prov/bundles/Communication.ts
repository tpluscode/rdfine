import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';
import { CommunicationMixin } from '../lib/Communication';

export const CommunicationBundle = [
  ActivityInfluenceMixin as Mixin,
  CommunicationMixin as Mixin];
