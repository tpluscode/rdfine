import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MosqueMixin } from '../lib/Mosque';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';

export const MosqueBundle = [
  MosqueMixin as Mixin,
  PlaceOfWorshipMixin as Mixin];
