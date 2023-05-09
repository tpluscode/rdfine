import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AuthorityRelationMixin } from './AuthorityRelation.js';

export interface ManagementRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AuthorityRelation<D>, rdfine.RdfResource<D> {
  managementRelationHasSource: Rico.Agent<D> | undefined;
  managementRelationHasTarget: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
}

export function ManagementRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ManagementRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ManagementRelationClass extends AuthorityRelationMixin(Resource) implements Partial<ManagementRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    managementRelationHasSource: Rico.Agent | undefined;
    @rdfine.property.resource()
    managementRelationHasTarget: Rico.Instantiation | Rico.RecordResource | undefined;
  }
  return ManagementRelationClass
}

class ManagementRelationImpl extends ManagementRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ManagementRelation>) {
    super(arg, init)
    this.types.add(rico.ManagementRelation)
  }

  static readonly __mixins: Mixin[] = [ManagementRelationMixin, AuthorityRelationMixin];
}
ManagementRelationMixin.appliesTo = rico.ManagementRelation
ManagementRelationMixin.Class = ManagementRelationImpl

export const fromPointer = createFactory<ManagementRelation>([AuthorityRelationMixin, ManagementRelationMixin], { types: [rico.ManagementRelation] });
