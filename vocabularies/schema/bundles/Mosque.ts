import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';
import { MosqueMixin } from '../lib/Mosque';

export const MosqueBundle = [
  PlaceOfWorshipMixin as Mixin,
  MosqueMixin as Mixin];
