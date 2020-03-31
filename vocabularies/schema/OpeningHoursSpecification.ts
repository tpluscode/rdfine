import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface OpeningHoursSpecification extends Schema.StructuredValue, RdfResource {
  closes: Date;
  dayOfWeek: Schema.DayOfWeek;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}

export default function OpeningHoursSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OpeningHoursSpecificationClass extends StructuredValueMixin(Resource) implements OpeningHoursSpecification {
    @property.literal()
    closes!: Date;
    @property()
    dayOfWeek!: Schema.DayOfWeek;
    @property.literal()
    opens!: Date;
    @property.literal()
    validFrom!: Date;
    @property.literal()
    validThrough!: Date;
  }
  return OpeningHoursSpecificationClass
}

class OpeningHoursSpecificationImpl extends OpeningHoursSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OpeningHoursSpecification>) {
    super(arg, init)
    this.types.add(schema.OpeningHoursSpecification)
  }
}
OpeningHoursSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OpeningHoursSpecification)
OpeningHoursSpecificationMixin.Class = OpeningHoursSpecificationImpl
