import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface Document<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  primaryTopic: RDF.NamedNode | undefined;
  'sha1': RDF.Term | undefined;
  topic: RDF.NamedNode | undefined;
}

export function DocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class DocumentClass extends Resource implements Document {
    @property()
    primaryTopic: RDF.NamedNode | undefined;
    @property()
    'sha1': RDF.Term | undefined;
    @property()
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
