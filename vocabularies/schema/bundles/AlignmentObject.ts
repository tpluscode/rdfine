import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { AlignmentObjectMixin } from '../AlignmentObject';

export const AlignmentObjectBundle = [
  IntangibleMixin as Mixin,
  AlignmentObjectMixin as Mixin];
