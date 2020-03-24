import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface SpeakableSpecification extends Schema.Intangible, RdfResource {
  cssSelector: string;
  xpath: string;
}

export default function SpeakableSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpeakableSpecificationClass extends IntangibleMixin(Resource) implements SpeakableSpecification {
    @property.literal()
    cssSelector!: string;
    @property.literal()
    xpath!: string;
  }
  return SpeakableSpecificationClass
}

class SpeakableSpecificationImpl extends SpeakableSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SpeakableSpecification>) {
    super(arg)
    this.types.add(schema.SpeakableSpecification)
    initializeProperties(this, init)
  }
}
SpeakableSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SpeakableSpecification)
SpeakableSpecificationMixin.Class = SpeakableSpecificationImpl
