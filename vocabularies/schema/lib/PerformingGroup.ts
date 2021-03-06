import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface PerformingGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function PerformingGroupMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PerformingGroup> & RdfResourceCore> & Base {
  @namespace(schema)
  class PerformingGroupClass extends OrganizationMixin(Resource) implements Partial<PerformingGroup> {
  }
  return PerformingGroupClass
}

class PerformingGroupImpl extends PerformingGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformingGroup>) {
    super(arg, init)
    this.types.add(schema.PerformingGroup)
  }

  static readonly __mixins: Mixin[] = [PerformingGroupMixin, OrganizationMixin];
}
PerformingGroupMixin.appliesTo = schema.PerformingGroup
PerformingGroupMixin.Class = PerformingGroupImpl

export const fromPointer = createFactory<PerformingGroup>([OrganizationMixin, PerformingGroupMixin], { types: [schema.PerformingGroup] });
