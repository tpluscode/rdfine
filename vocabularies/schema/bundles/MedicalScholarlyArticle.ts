import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScholarlyArticleMixin } from '../ScholarlyArticle';
import { MedicalScholarlyArticleMixin } from '../MedicalScholarlyArticle';

export const MedicalScholarlyArticleBundle = [
  ScholarlyArticleMixin as Mixin,
  MedicalScholarlyArticleMixin as Mixin];
