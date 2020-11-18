import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { MedicalWebPageMixin } from '../lib/MedicalWebPage';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';

export const MedicalWebPageBundle = [
  WebPageMixin as Mixin,
  MedicalWebPageMixin as Mixin,
  MedicalAudienceMixin as Mixin];
