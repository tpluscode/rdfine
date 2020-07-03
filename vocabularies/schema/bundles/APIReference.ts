import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TechArticleMixin } from '../TechArticle';
import { APIReferenceMixin } from '../APIReference';

export const APIReferenceBundle = [
  TechArticleMixin as Mixin,
  APIReferenceMixin as Mixin];
