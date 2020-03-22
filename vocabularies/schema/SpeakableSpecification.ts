import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface SpeakableSpecification extends Schema.Intangible, RdfResource {
  cssSelector: string;
  xpath: string;
}

export default function SpeakableSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpeakableSpecificationClass extends IntangibleMixin(Resource) implements SpeakableSpecification {
    @property.resource()
    cssSelector!: string;
    @property.resource()
    xpath!: string;
  }
  return SpeakableSpecificationClass
}

class SpeakableSpecificationImpl extends SpeakableSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SpeakableSpecification)
  }
}
SpeakableSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SpeakableSpecification)
SpeakableSpecificationMixin.Class = SpeakableSpecificationImpl
