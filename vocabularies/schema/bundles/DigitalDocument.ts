import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DigitalDocumentMixin } from '../lib/DigitalDocument';
import { DigitalDocumentPermissionMixin } from '../lib/DigitalDocumentPermission';

export const DigitalDocumentBundle = [
  CreativeWorkMixin as Mixin,
  DigitalDocumentMixin as Mixin,
  DigitalDocumentPermissionMixin as Mixin];
