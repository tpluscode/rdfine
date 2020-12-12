import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DigitalDocumentMixin } from './DigitalDocument';

export interface PresentationDigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DigitalDocument<D>, RdfResource<D> {
}

export function PresentationDigitalDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PresentationDigitalDocument> & RdfResourceCore> & Base {
  @namespace(schema)
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
