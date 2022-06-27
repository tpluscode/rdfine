import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { IntangibleMixin } from '../lib/Intangible';

export const AlignmentObjectBundle = [
  AlignmentObjectMixin as Mixin,
  IntangibleMixin as Mixin];
