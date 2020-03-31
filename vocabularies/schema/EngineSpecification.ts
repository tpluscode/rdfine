import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface EngineSpecification extends Schema.StructuredValue, RdfResource {
  fuelType: string;
  fuelTypeTerm: RdfResource | Schema.QualitativeValue;
}

export default function EngineSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EngineSpecificationClass extends StructuredValueMixin(Resource) implements EngineSpecification {
    @property.literal()
    fuelType!: string;
    @property({ path: schema.fuelType })
    fuelTypeTerm!: RdfResource | Schema.QualitativeValue;
  }
  return EngineSpecificationClass
}

class EngineSpecificationImpl extends EngineSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EngineSpecification>) {
    super(arg, init)
    this.types.add(schema.EngineSpecification)
  }
}
EngineSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EngineSpecification)
EngineSpecificationMixin.Class = EngineSpecificationImpl
