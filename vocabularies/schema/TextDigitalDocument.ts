import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface TextDigitalDocument extends Schema.DigitalDocument, RdfResource {
}

export function TextDigitalDocumentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TextDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements TextDigitalDocument {
  }
  return TextDigitalDocumentClass
}

class TextDigitalDocumentImpl extends TextDigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TextDigitalDocument>) {
    super(arg, init)
    this.types.add(schema.TextDigitalDocument)
  }

  static readonly __mixins: Mixin[] = [TextDigitalDocumentMixin, DigitalDocumentMixin];
}
TextDigitalDocumentMixin.appliesTo = schema.TextDigitalDocument
TextDigitalDocumentMixin.Class = TextDigitalDocumentImpl
