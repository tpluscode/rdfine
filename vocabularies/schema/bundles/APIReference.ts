import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { APIReferenceMixin } from '../lib/APIReference';
import { TechArticleMixin } from '../lib/TechArticle';

export const APIReferenceBundle = [
  APIReferenceMixin as Mixin,
  TechArticleMixin as Mixin];
