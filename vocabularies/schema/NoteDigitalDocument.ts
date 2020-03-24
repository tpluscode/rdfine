import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<NoteDigitalDocument>) {
    super(arg)
    this.types.add(schema.NoteDigitalDocument)
    initializeProperties(this, init)
  }
}
NoteDigitalDocumentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NoteDigitalDocument)
NoteDigitalDocumentMixin.Class = NoteDigitalDocumentImpl
