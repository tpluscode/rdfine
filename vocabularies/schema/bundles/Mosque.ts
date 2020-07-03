import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { MosqueMixin } from '../Mosque';

export const MosqueBundle = [
  PlaceOfWorshipMixin as Mixin,
  MosqueMixin as Mixin];
