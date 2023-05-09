import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DigitalDocumentMixin } from './DigitalDocument.js';

export interface PresentationDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, rdfine.RdfResource<D> {
}

export function PresentationDigitalDocumentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PresentationDigitalDocument> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PresentationDigitalDocumentClass extends DigitalDocumentMixin(Resource) implements Partial<PresentationDigitalDocument> {
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

export const fromPointer = createFactory<PresentationDigitalDocument>([DigitalDocumentMixin, PresentationDigitalDocumentMixin], { types: [schema.PresentationDigitalDocument] });
