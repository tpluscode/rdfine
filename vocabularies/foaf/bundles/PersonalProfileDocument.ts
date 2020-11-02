import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../Document';
import { PersonalProfileDocumentMixin } from '../PersonalProfileDocument';

export const PersonalProfileDocumentBundle = [
  DocumentMixin as Mixin,
  PersonalProfileDocumentMixin as Mixin];
