import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';

export interface Document<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  primaryTopic: RDF.NamedNode | undefined;
  'sha1': RDF.Term | undefined;
  topic: RDF.NamedNode | undefined;
}

export function DocumentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Document> & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class DocumentClass extends Resource implements Partial<Document> {
    @rdfine.property()
    primaryTopic: RDF.NamedNode | undefined;
    @rdfine.property()
    'sha1': RDF.Term | undefined;
    @rdfine.property()
    topic: RDF.NamedNode | undefined;
  }
  return DocumentClass
}

class DocumentImpl extends DocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Document>) {
    super(arg, init)
    this.types.add(foaf.Document)
  }

  static readonly __mixins: Mixin[] = [DocumentMixin];
}
DocumentMixin.appliesTo = foaf.Document
DocumentMixin.Class = DocumentImpl

export const fromPointer = createFactory<Document>([DocumentMixin], { types: [foaf.Document] });
