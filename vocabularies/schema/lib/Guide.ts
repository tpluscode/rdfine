import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Guide<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  reviewAspect: string | undefined;
}

export function GuideMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GuideClass extends CreativeWorkMixin(Resource) implements Guide {
    @property.literal()
    reviewAspect: string | undefined;
  }
  return GuideClass
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
