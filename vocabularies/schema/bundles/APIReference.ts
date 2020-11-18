import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TechArticleMixin } from '../lib/TechArticle';
import { APIReferenceMixin } from '../lib/APIReference';

export const APIReferenceBundle = [
  TechArticleMixin as Mixin,
  APIReferenceMixin as Mixin];
