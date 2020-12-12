import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface EngineSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  engineDisplacement: Schema.QuantitativeValue<D> | undefined;
  enginePower: Schema.QuantitativeValue<D> | undefined;
  engineType: string | undefined;
  engineTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  fuelType: string | undefined;
  fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  torque: Schema.QuantitativeValue<D> | undefined;
}

export function EngineSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EngineSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class EngineSpecificationClass extends StructuredValueMixin(Resource) implements Partial<EngineSpecification> {
    @property.resource()
    engineDisplacement: Schema.QuantitativeValue | undefined;
    @property.resource()
    enginePower: Schema.QuantitativeValue | undefined;
    @property.literal()
    engineType: string | undefined;
    @property({ path: schema.engineType })
    engineTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.literal()
    fuelType: string | undefined;
    @property({ path: schema.fuelType })
    fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.resource()
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
