import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Document<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function DocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Document> & RdfResourceCore> & Base {
  @namespace(as)
  class DocumentClass extends ObjectMixin(Resource) implements Partial<Document> {
  }
  return DocumentClass
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
