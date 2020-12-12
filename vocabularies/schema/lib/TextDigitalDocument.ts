import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface TextDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, RdfResource<D> {
}

export function TextDigitalDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TextDigitalDocument> & RdfResourceCore> & Base {
  @namespace(schema)
  class TextDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements Partial<TextDigitalDocument> {
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
