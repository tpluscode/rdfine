import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface PropertyValueSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  defaultValue: Schema.Thing<D> | undefined;
  defaultValueLiteral: string | undefined;
  maxValue: number | undefined;
  minValue: number | undefined;
  multipleValues: boolean | undefined;
  readonlyValue: boolean | undefined;
  stepValue: number | undefined;
  valueMaxLength: number | undefined;
  valueMinLength: number | undefined;
  valueName: string | undefined;
  valuePattern: string | undefined;
  valueRequired: boolean | undefined;
}

export function PropertyValueSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PropertyValueSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class PropertyValueSpecificationClass extends IntangibleMixin(Resource) implements Partial<PropertyValueSpecification> {
    @property.resource()
    defaultValue: Schema.Thing | undefined;
    @property.literal({ path: schema.defaultValue })
    defaultValueLiteral: string | undefined;
    @property.literal({ type: Number })
    maxValue: number | undefined;
    @property.literal({ type: Number })
    minValue: number | undefined;
    @property.literal({ type: Boolean })
    multipleValues: boolean | undefined;
    @property.literal({ type: Boolean })
    readonlyValue: boolean | undefined;
    @property.literal({ type: Number })
    stepValue: number | undefined;
    @property.literal({ type: Number })
    valueMaxLength: number | undefined;
    @property.literal({ type: Number })
    valueMinLength: number | undefined;
    @property.literal()
    valueName: string | undefined;
    @property.literal()
    valuePattern: string | undefined;
    @property.literal({ type: Boolean })
    valueRequired: boolean | undefined;
  }
  return PropertyValueSpecificationClass
}

class PropertyValueSpecificationImpl extends PropertyValueSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyValueSpecification>) {
    super(arg, init)
    this.types.add(schema.PropertyValueSpecification)
  }

  static readonly __mixins: Mixin[] = [PropertyValueSpecificationMixin, IntangibleMixin];
}
PropertyValueSpecificationMixin.appliesTo = schema.PropertyValueSpecification
PropertyValueSpecificationMixin.Class = PropertyValueSpecificationImpl

export const fromPointer = createFactory<PropertyValueSpecification>([IntangibleMixin, PropertyValueSpecificationMixin], { types: [schema.PropertyValueSpecification] });
