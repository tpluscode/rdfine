import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalScholarlyArticleMixin } from '../lib/MedicalScholarlyArticle';
import { ScholarlyArticleMixin } from '../lib/ScholarlyArticle';

export const MedicalScholarlyArticleBundle = [
  MedicalScholarlyArticleMixin as Mixin,
  ScholarlyArticleMixin as Mixin];
