import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface PresentationDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export function PresentationDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PresentationDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements PresentationDigitalDocument {
  }
  return PresentationDigitalDocumentClass
}

class PresentationDigitalDocumentImpl extends PresentationDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PresentationDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.PresentationDigitalDocument)
  }

  static readonly __mixins: Mixin[] = [PresentationDigitalDocumentMixin, DigitalDocumentMixin];
}
PresentationDigitalDocumentMixin.appliesTo = schema.PresentationDigitalDocument
PresentationDigitalDocumentMixin.Class = PresentationDigitalDocumentImpl
