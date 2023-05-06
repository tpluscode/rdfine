import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DigitalDocumentMixin } from './DigitalDocument.js';

export interface NoteDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, RdfResource<D> {
}

export function NoteDigitalDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NoteDigitalDocument> & RdfResourceCore> & Base {
  @namespace(schema)
  class NoteDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements Partial<NoteDigitalDocument> {
  }
  return NoteDigitalDocumentClass
}

class NoteDigitalDocumentImpl extends NoteDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NoteDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.NoteDigitalDocument)
  }

  static readonly __mixins: Mixin[] = [NoteDigitalDocumentMixin, DigitalDocumentMixin];
}
NoteDigitalDocumentMixin.appliesTo = schema.NoteDigitalDocument
NoteDigitalDocumentMixin.Class = NoteDigitalDocumentImpl

export const fromPointer = createFactory<NoteDigitalDocument>([DigitalDocumentMixin, NoteDigitalDocumentMixin], { types: [schema.NoteDigitalDocument] });
