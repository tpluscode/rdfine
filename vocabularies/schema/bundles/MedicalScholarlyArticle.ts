import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScholarlyArticleMixin } from '../lib/ScholarlyArticle';
import { MedicalScholarlyArticleMixin } from '../lib/MedicalScholarlyArticle';

export const MedicalScholarlyArticleBundle = [
  ScholarlyArticleMixin as Mixin,
  MedicalScholarlyArticleMixin as Mixin];
