import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DigitalDocumentMixin } from './DigitalDocument.js';

export interface TextDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, rdfine.RdfResource<D> {
}

export function TextDigitalDocumentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TextDigitalDocument> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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

export const fromPointer = createFactory<TextDigitalDocument>([DigitalDocumentMixin, TextDigitalDocumentMixin], { types: [schema.TextDigitalDocument] });
