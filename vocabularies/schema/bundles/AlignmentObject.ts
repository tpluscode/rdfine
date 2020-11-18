import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';

export const AlignmentObjectBundle = [
  IntangibleMixin as Mixin,
  AlignmentObjectMixin as Mixin];
