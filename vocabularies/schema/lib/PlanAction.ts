import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizeActionMixin } from './OrganizeAction.js';

export interface PlanAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizeAction<D>, rdfine.RdfResource<D> {
  scheduledTime: Date | undefined;
}

export function PlanActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PlanAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlanActionClass extends OrganizeActionMixin(Resource) implements Partial<PlanAction> {
    @rdfine.property.literal({ type: Date })
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

export const fromPointer = createFactory<PlanAction>([OrganizeActionMixin, PlanActionMixin], { types: [schema.PlanAction] });
