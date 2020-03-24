import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface EngineSpecification extends Schema.StructuredValue, RdfResource {
  fuelType: Schema.QualitativeValue;
  fuelTypeLiteral: string;
}

export default function EngineSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EngineSpecificationClass extends StructuredValueMixin(Resource) implements EngineSpecification {
    @property.resource()
    fuelType!: Schema.QualitativeValue;
    @property.literal({ path: schema.fuelType })
    fuelTypeLiteral!: string;
  }
  return EngineSpecificationClass
}

class EngineSpecificationImpl extends EngineSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EngineSpecification)
  }
}
EngineSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EngineSpecification)
EngineSpecificationMixin.Class = EngineSpecificationImpl
