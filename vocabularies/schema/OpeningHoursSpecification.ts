import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface OpeningHoursSpecification extends Schema.StructuredValue, RdfResource {
  closes: Date;
  dayOfWeek: Schema.DayOfWeek;
  opens: Date;
  validFrom: Date | Date;
  validThrough: Date | Date;
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
    validFrom!: Date | Date;
    @property.literal()
    validThrough!: Date | Date;
  }
  return OpeningHoursSpecificationClass
}

class OpeningHoursSpecificationImpl extends OpeningHoursSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OpeningHoursSpecification)
  }
}
OpeningHoursSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OpeningHoursSpecification)
OpeningHoursSpecificationMixin.Class = OpeningHoursSpecificationImpl
