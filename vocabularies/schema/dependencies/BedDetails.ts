import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { BedDetailsMixin } from '../BedDetails';

export const BedDetailsDependencies = [
  IntangibleMixin as Mixin,
  BedDetailsMixin as Mixin];
