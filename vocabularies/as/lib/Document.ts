import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Document<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function DocumentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Document & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class DocumentClass extends ObjectMixin(Resource) {
  }
  return DocumentClass as any
}

class DocumentImpl extends DocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Document>) {
    super(arg, init)
    this.types.add(as.Document)
  }

  static readonly __mixins: Mixin[] = [DocumentMixin, ObjectMixin];
}
DocumentMixin.appliesTo = as.Document
DocumentMixin.Class = DocumentImpl

export const fromPointer = createFactory<Document>([ObjectMixin, DocumentMixin], { types: [as.Document] });
