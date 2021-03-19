import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RejectMixin } from '../lib/Reject';
import { TentativeRejectMixin } from '../lib/TentativeReject';

export const TentativeRejectBundle = [
  RejectMixin as Mixin,
  TentativeRejectMixin as Mixin];
