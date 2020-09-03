import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface OpeningHoursSpecification extends Schema.StructuredValue, RdfResource {
  closes: Date;
  dayOfWeek: Schema.DayOfWeek;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}

export function OpeningHoursSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OpeningHoursSpecificationClass extends StructuredValueMixin(Resource) implements OpeningHoursSpecification {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    closes!: Date;
    @property()
    dayOfWeek!: Schema.DayOfWeek;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    opens!: Date;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom!: Date;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough!: Date;
  }
  return OpeningHoursSpecificationClass
}

class OpeningHoursSpecificationImpl extends OpeningHoursSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OpeningHoursSpecification>) {
    super(arg, init)
    this.types.add(schema.OpeningHoursSpecification)
  }

  static readonly __mixins: Mixin[] = [OpeningHoursSpecificationMixin, StructuredValueMixin];
}
OpeningHoursSpecificationMixin.appliesTo = schema.OpeningHoursSpecification
OpeningHoursSpecificationMixin.Class = OpeningHoursSpecificationImpl
