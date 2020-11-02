import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { MedicalWebPageMixin } from '../MedicalWebPage';
import { MedicalAudienceMixin } from '../MedicalAudience';

export const MedicalWebPageBundle = [
  WebPageMixin as Mixin,
  MedicalWebPageMixin as Mixin,
  MedicalAudienceMixin as Mixin];
