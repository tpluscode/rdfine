import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface NoteDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, RdfResource<D> {
}

export function NoteDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [NoteDigitalDocumentMixin, DigitalDocumentMixin];
}
NoteDigitalDocumentMixin.appliesTo = schema.NoteDigitalDocument
NoteDigitalDocumentMixin.Class = NoteDigitalDocumentImpl
