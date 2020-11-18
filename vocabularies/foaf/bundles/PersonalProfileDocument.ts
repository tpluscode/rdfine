import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { PersonalProfileDocumentMixin } from '../lib/PersonalProfileDocument';

export const PersonalProfileDocumentBundle = [
  DocumentMixin as Mixin,
  PersonalProfileDocumentMixin as Mixin];
