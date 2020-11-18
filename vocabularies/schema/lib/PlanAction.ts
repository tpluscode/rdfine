import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizeActionMixin } from './OrganizeAction';

export interface PlanAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizeAction<D>, RdfResource<D> {
  scheduledTime: Date | undefined;
}

export function PlanActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlanActionClass extends OrganizeActionMixin(Resource) implements PlanAction {
    @property.literal({ type: Date })
    scheduledTime: Date | undefined;
  }
  return PlanActionClass
}

class PlanActionImpl extends PlanActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlanAction>) {
    super(arg, init)
    this.types.add(schema.PlanAction)
  }

  static readonly __mixins: Mixin[] = [PlanActionMixin, OrganizeActionMixin];
}
PlanActionMixin.appliesTo = schema.PlanAction
PlanActionMixin.Class = PlanActionImpl
