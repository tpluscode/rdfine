import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import ClassMixin from './Class';
import ContainerMixin from './Container';
import ContainerMembershipPropertyMixin from './ContainerMembershipProperty';
import DatatypeMixin from './Datatype';
import LiteralMixin from './Literal';
import ResourceMixin from './Resource';

export default [
  ClassMixin as Mixin,
  ContainerMixin as Mixin,
  ContainerMembershipPropertyMixin as Mixin,
  DatatypeMixin as Mixin,
  LiteralMixin as Mixin,
  ResourceMixin as Mixin,
];

export { Class } from './Class';
export { Container } from './Container';
export { ContainerMembershipProperty } from './ContainerMembershipProperty';
export { Datatype } from './Datatype';
export { Literal } from './Literal';
export { Resource } from './Resource';
