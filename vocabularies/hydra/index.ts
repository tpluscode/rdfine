import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import ApiDocumentationMixin from './ApiDocumentation';
import ClassMixin from './Class';
import CollectionMixin from './Collection';
import ErrorMixin from './Error';
import IriTemplateMixin from './IriTemplate';
import IriTemplateMappingMixin from './IriTemplateMapping';
import LinkMixin from './Link';
import OperationMixin from './Operation';
import PartialCollectionViewMixin from './PartialCollectionView';
import ResourceMixin from './Resource';
import StatusMixin from './Status';
import SupportedPropertyMixin from './SupportedProperty';
import TemplatedLinkMixin from './TemplatedLink';
import VariableRepresentationMixin from './VariableRepresentation';

export default [
  ApiDocumentationMixin as Mixin,
  ClassMixin as Mixin,
  CollectionMixin as Mixin,
  ErrorMixin as Mixin,
  IriTemplateMixin as Mixin,
  IriTemplateMappingMixin as Mixin,
  LinkMixin as Mixin,
  OperationMixin as Mixin,
  PartialCollectionViewMixin as Mixin,
  ResourceMixin as Mixin,
  StatusMixin as Mixin,
  SupportedPropertyMixin as Mixin,
  TemplatedLinkMixin as Mixin,
  VariableRepresentationMixin as Mixin,
];

export { ApiDocumentation } from './ApiDocumentation';
export { Class } from './Class';
export { Collection } from './Collection';
export { Error } from './Error';
export { IriTemplate } from './IriTemplate';
export { IriTemplateMapping } from './IriTemplateMapping';
export { Link } from './Link';
export { Operation } from './Operation';
export { PartialCollectionView } from './PartialCollectionView';
export { Resource } from './Resource';
export { Status } from './Status';
export { SupportedProperty } from './SupportedProperty';
export { TemplatedLink } from './TemplatedLink';
export { VariableRepresentation } from './VariableRepresentation';
