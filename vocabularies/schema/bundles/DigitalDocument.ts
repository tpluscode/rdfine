import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DigitalDocumentMixin } from '../DigitalDocument';
import { DigitalDocumentPermissionMixin } from '../DigitalDocumentPermission';

export const DigitalDocumentBundle = [
  CreativeWorkMixin as Mixin,
  DigitalDocumentMixin as Mixin,
  DigitalDocumentPermissionMixin as Mixin];
