import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentOriginationRelationMixin } from './AgentOriginationRelation.js';

export interface CreationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentOriginationRelation<D>, RdfResource<D> {
  creationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  creationRelationHasTarget: Rico.Agent<D> | undefined;
  creationWithRole: Rico.RoleType<D> | undefined;
}

export function CreationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CreationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class CreationRelationClass extends AgentOriginationRelationMixin(Resource) implements Partial<CreationRelation> {
    @property.resource()
    creationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    creationRelationHasTarget: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.RoleType] })
    creationWithRole: Rico.RoleType | undefined;
  }
  return CreationRelationClass
}

class CreationRelationImpl extends CreationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreationRelation>) {
    super(arg, init)
    this.types.add(rico.CreationRelation)
  }

  static readonly __mixins: Mixin[] = [CreationRelationMixin, AgentOriginationRelationMixin];
}
CreationRelationMixin.appliesTo = rico.CreationRelation
CreationRelationMixin.Class = CreationRelationImpl

export const fromPointer = createFactory<CreationRelation>([AgentOriginationRelationMixin, CreationRelationMixin], { types: [rico.CreationRelation] });
