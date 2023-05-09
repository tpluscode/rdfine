import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface DemographicGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isOrWasDemographicGroupOf: Rico.Group<D> | Rico.Person<D> | undefined;
}

export function DemographicGroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DemographicGroup> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DemographicGroupClass extends TypeMixin(Resource) implements Partial<DemographicGroup> {
    @rdfine.property.resource()
    isOrWasDemographicGroupOf: Rico.Group | Rico.Person | undefined;
  }
  return DemographicGroupClass
}

class DemographicGroupImpl extends DemographicGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DemographicGroup>) {
    super(arg, init)
    this.types.add(rico.DemographicGroup)
  }

  static readonly __mixins: Mixin[] = [DemographicGroupMixin, TypeMixin];
}
DemographicGroupMixin.appliesTo = rico.DemographicGroup
DemographicGroupMixin.Class = DemographicGroupImpl

export const fromPointer = createFactory<DemographicGroup>([TypeMixin, DemographicGroupMixin], { types: [rico.DemographicGroup] });
