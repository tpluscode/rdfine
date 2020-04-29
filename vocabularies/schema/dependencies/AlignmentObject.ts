import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { AlignmentObjectMixin } from '../AlignmentObject';

export const AlignmentObjectDependencies = [
  IntangibleMixin as Mixin,
  AlignmentObjectMixin as Mixin];
