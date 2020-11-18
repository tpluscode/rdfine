import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PerformingGroupMixin } from './PerformingGroup';

export interface TheaterGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PerformingGroup<D>, RdfResource<D> {
}

export function TheaterGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TheaterGroupClass extends PerformingGroupMixin(Resource) implements TheaterGroup {
  }
  return TheaterGroupClass
}

class TheaterGroupImpl extends TheaterGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TheaterGroup>) {
    super(arg, init)
    this.types.add(schema.TheaterGroup)
  }

  static readonly __mixins: Mixin[] = [TheaterGroupMixin, PerformingGroupMixin];
}
TheaterGroupMixin.appliesTo = schema.TheaterGroup
TheaterGroupMixin.Class = TheaterGroupImpl
