import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdfs from '.';
import ClassMixin from './Class';

export interface Datatype extends Rdfs.Class, RdfResource {
}

export default function DatatypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class DatatypeClass extends ClassMixin(Resource) implements Datatype {
  }
  return DatatypeClass
}

class DatatypeImpl extends DatatypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Datatype>) {
    super(arg, init)
    this.types.add(rdfs.Datatype)
  }
}
DatatypeMixin.shouldApply = (r: RdfResource) => r.types.has(rdfs.Datatype)
DatatypeMixin.Class = DatatypeImpl
