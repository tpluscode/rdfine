import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface OpeningHoursSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  closes: Date | undefined;
  dayOfWeek: Schema.DayOfWeek | undefined;
  opens: Date | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
}

export function OpeningHoursSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OpeningHoursSpecification> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OpeningHoursSpecificationClass extends StructuredValueMixin(Resource) implements Partial<OpeningHoursSpecification> {
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    closes: Date | undefined;
    @rdfine.property()
    dayOfWeek: Schema.DayOfWeek | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    opens: Date | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
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

export const fromPointer = createFactory<OpeningHoursSpecification>([StructuredValueMixin, OpeningHoursSpecificationMixin], { types: [schema.OpeningHoursSpecification] });
