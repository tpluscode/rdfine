import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.NoteDigitalDocument)
  }
}
NoteDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NoteDigitalDocument)
NoteDigitalDocumentMixin.Class = NoteDigitalDocumentImpl
