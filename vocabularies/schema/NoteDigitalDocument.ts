import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import DigitalDocumentMixin from './DigitalDocument';

export interface NoteDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export default function NoteDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NoteDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements NoteDigitalDocument {
  }
  return NoteDigitalDocumentClass
}

class NoteDigitalDocumentImpl extends NoteDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NoteDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.NoteDigitalDocument)
  }
}
NoteDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NoteDigitalDocument)
NoteDigitalDocumentMixin.Class = NoteDigitalDocumentImpl
