import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { ReportMixin } from '../Report';

export const ReportBundle = [
  ArticleMixin as Mixin,
  ReportMixin as Mixin];
