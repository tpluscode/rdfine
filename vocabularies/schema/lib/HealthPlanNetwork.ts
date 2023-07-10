import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface HealthPlanNetwork<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  healthPlanCostSharing: boolean | undefined;
  healthPlanNetworkId: string | undefined;
  healthPlanNetworkTier: string | undefined;
}

export function HealthPlanNetworkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HealthPlanNetwork & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthPlanNetworkClass extends IntangibleMixin(Resource) {
    @rdfine.property.literal({ type: Boolean })
    healthPlanCostSharing: boolean | undefined;
    @rdfine.property.literal()
    healthPlanNetworkId: string | undefined;
    @rdfine.property.literal()
    healthPlanNetworkTier: string | undefined;
  }
  return HealthPlanNetworkClass as any
}

class HealthPlanNetworkImpl extends HealthPlanNetworkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthPlanNetwork>) {
    super(arg, init)
    this.types.add(schema.HealthPlanNetwork)
  }

  static readonly __mixins: Mixin[] = [HealthPlanNetworkMixin, IntangibleMixin];
}
HealthPlanNetworkMixin.appliesTo = schema.HealthPlanNetwork
HealthPlanNetworkMixin.Class = HealthPlanNetworkImpl

export const fromPointer = createFactory<HealthPlanNetwork>([IntangibleMixin, HealthPlanNetworkMixin], { types: [schema.HealthPlanNetwork] });
