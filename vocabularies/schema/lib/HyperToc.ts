import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface HyperToc<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  associatedMedia: Schema.MediaObject<D> | undefined;
  tocEntry: Schema.HyperTocEntry<D> | undefined;
}

export function HyperTocMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HyperToc & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HyperTocClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.resource()
    associatedMedia: Schema.MediaObject | undefined;
    @rdfine.property.resource()
    tocEntry: Schema.HyperTocEntry | undefined;
  }
  return HyperTocClass as any
}

class HyperTocImpl extends HyperTocMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HyperToc>) {
    super(arg, init)
    this.types.add(schema.HyperToc)
  }

  static readonly __mixins: Mixin[] = [HyperTocMixin, CreativeWorkMixin];
}
HyperTocMixin.appliesTo = schema.HyperToc
HyperTocMixin.Class = HyperTocImpl

export const fromPointer = createFactory<HyperToc>([CreativeWorkMixin, HyperTocMixin], { types: [schema.HyperToc] });
