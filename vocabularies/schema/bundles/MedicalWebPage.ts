import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';
import { MedicalWebPageMixin } from '../lib/MedicalWebPage';
import { WebPageMixin } from '../lib/WebPage';

export const MedicalWebPageBundle = [
  MedicalAudienceMixin as Mixin,
  MedicalWebPageMixin as Mixin,
  WebPageMixin as Mixin];
