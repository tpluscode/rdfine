import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '.';
import { ClassMixin } from './Class';

export interface Datatype<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, RdfResource<D> {
}

export function DatatypeMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [DatatypeMixin, ClassMixin];
}
DatatypeMixin.appliesTo = rdfs.Datatype
DatatypeMixin.Class = DatatypeImpl
