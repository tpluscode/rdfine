import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Guide<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  reviewAspect: string | undefined;
}

export function GuideMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Guide & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GuideClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    reviewAspect: string | undefined;
  }
  return GuideClass as any
}

class GuideImpl extends GuideMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Guide>) {
    super(arg, init)
    this.types.add(schema.Guide)
  }

  static readonly __mixins: Mixin[] = [GuideMixin, CreativeWorkMixin];
}
GuideMixin.appliesTo = schema.Guide
GuideMixin.Class = GuideImpl

export const fromPointer = createFactory<Guide>([CreativeWorkMixin, GuideMixin], { types: [schema.Guide] });
