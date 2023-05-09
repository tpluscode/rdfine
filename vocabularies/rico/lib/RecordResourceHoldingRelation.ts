import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ManagementRelationMixin } from './ManagementRelation.js';

export interface RecordResourceHoldingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ManagementRelation<D>, RdfResource<D> {
  recordResourceHoldingRelationHasSource: Rico.Agent<D> | undefined;
  recordResourceHoldingRelationHasTarget: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
}

export function RecordResourceHoldingRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordResourceHoldingRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordResourceHoldingRelationClass extends ManagementRelationMixin(Resource) implements Partial<RecordResourceHoldingRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    recordResourceHoldingRelationHasSource: Rico.Agent | undefined;
    @property.resource()
    recordResourceHoldingRelationHasTarget: Rico.Instantiation | Rico.RecordResource | undefined;
  }
  return RecordResourceHoldingRelationClass
}

class RecordResourceHoldingRelationImpl extends RecordResourceHoldingRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResourceHoldingRelation>) {
    super(arg, init)
    this.types.add(rico.RecordResourceHoldingRelation)
  }

  static readonly __mixins: Mixin[] = [RecordResourceHoldingRelationMixin, ManagementRelationMixin];
}
RecordResourceHoldingRelationMixin.appliesTo = rico.RecordResourceHoldingRelation
RecordResourceHoldingRelationMixin.Class = RecordResourceHoldingRelationImpl

export const fromPointer = createFactory<RecordResourceHoldingRelation>([ManagementRelationMixin, RecordResourceHoldingRelationMixin], { types: [rico.RecordResourceHoldingRelation] });
