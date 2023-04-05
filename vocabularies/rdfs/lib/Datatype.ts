import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '../index.js';
import { ClassMixin } from './Class.js';

export interface Datatype<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, RdfResource<D> {
}

export function DatatypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Datatype> & RdfResourceCore> & Base {
  @namespace(rdfs)
  class DatatypeClass extends ClassMixin(Resource) implements Partial<Datatype> {
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

export const fromPointer = createFactory<Datatype>([ClassMixin, DatatypeMixin], { types: [rdfs.Datatype] });
