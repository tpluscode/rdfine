import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { ReportMixin } from '../lib/Report';

export const ReportBundle = [
  ArticleMixin as Mixin,
  ReportMixin as Mixin];
