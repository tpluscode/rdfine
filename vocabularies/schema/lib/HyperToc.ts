import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface HyperToc<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  associatedMedia: Schema.MediaObject<D> | undefined;
  tocEntry: Schema.HyperTocEntry<D> | undefined;
}

export function HyperTocMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HyperToc> & RdfResourceCore> & Base {
  @namespace(schema)
  class HyperTocClass extends CreativeWorkMixin(Resource) implements Partial<HyperToc> {
    @property.resource()
    associatedMedia: Schema.MediaObject | undefined;
    @property.resource()
    tocEntry: Schema.HyperTocEntry | undefined;
  }
  return HyperTocClass
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
