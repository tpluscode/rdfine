import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface DigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  hasDigitalDocumentPermission: Schema.DigitalDocumentPermission<D> | undefined;
}

export function DigitalDocumentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DigitalDocument> & RdfResourceCore> & Base {
  @namespace(schema)
  class DigitalDocumentClass extends CreativeWorkMixin(Resource) implements Partial<DigitalDocument> {
    @property.resource()
    hasDigitalDocumentPermission: Schema.DigitalDocumentPermission | undefined;
  }
  return DigitalDocumentClass
}

class DigitalDocumentImpl extends DigitalDocumentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DigitalDocument>) {
    super(arg, init)
    this.types.add(schema.DigitalDocument)
  }

  static readonly __mixins: Mixin[] = [DigitalDocumentMixin, CreativeWorkMixin];
}
DigitalDocumentMixin.appliesTo = schema.DigitalDocument
DigitalDocumentMixin.Class = DigitalDocumentImpl

export const fromPointer = createFactory<DigitalDocument>([CreativeWorkMixin, DigitalDocumentMixin], { types: [schema.DigitalDocument] });
