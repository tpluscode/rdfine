import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface DigitalDocument<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  hasDigitalDocumentPermission: Schema.DigitalDocumentPermission<D> | undefined;
}

export function DigitalDocumentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DigitalDocument & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DigitalDocumentClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.resource()
    hasDigitalDocumentPermission: Schema.DigitalDocumentPermission | undefined;
  }
  return DigitalDocumentClass as any
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
