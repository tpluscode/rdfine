import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import AltMixin from './Alt';
import BagMixin from './Bag';
import CompoundLiteralMixin from './CompoundLiteral';
import ListMixin from './List';
import PropertyMixin from './Property';
import SeqMixin from './Seq';
import StatementMixin from './Statement';

export default [
  AltMixin as Mixin,
  BagMixin as Mixin,
  CompoundLiteralMixin as Mixin,
  ListMixin as Mixin,
  PropertyMixin as Mixin,
  SeqMixin as Mixin,
  StatementMixin as Mixin,
];

export { Alt } from './Alt';
export { Bag } from './Bag';
export { CompoundLiteral } from './CompoundLiteral';
export { List } from './List';
export { Property } from './Property';
export { Seq } from './Seq';
export { Statement } from './Statement';
