import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface EngineSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  engineDisplacement: Schema.QuantitativeValue<D> | undefined;
  enginePower: Schema.QuantitativeValue<D> | undefined;
  engineType: string | undefined;
  engineTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  fuelType: string | undefined;
  fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  torque: Schema.QuantitativeValue<D> | undefined;
}

export function EngineSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EngineSpecification> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EngineSpecificationClass extends StructuredValueMixin(Resource) implements Partial<EngineSpecification> {
    @rdfine.property.resource()
    engineDisplacement: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    enginePower: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal()
    engineType: string | undefined;
    @rdfine.property({ path: schema.engineType })
    engineTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @rdfine.property.literal()
    fuelType: string | undefined;
    @rdfine.property({ path: schema.fuelType })
    fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @rdfine.property.resource()
    torque: Schema.QuantitativeValue | undefined;
  }
  return EngineSpecificationClass
}

class EngineSpecificationImpl extends EngineSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EngineSpecification>) {
    super(arg, init)
    this.types.add(schema.EngineSpecification)
  }

  static readonly __mixins: Mixin[] = [EngineSpecificationMixin, StructuredValueMixin];
}
EngineSpecificationMixin.appliesTo = schema.EngineSpecification
EngineSpecificationMixin.Class = EngineSpecificationImpl

export const fromPointer = createFactory<EngineSpecification>([StructuredValueMixin, EngineSpecificationMixin], { types: [schema.EngineSpecification] });
