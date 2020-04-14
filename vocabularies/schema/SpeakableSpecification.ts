import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SpeakableSpecification>) {
    super(arg, init)
    this.types.add(schema.SpeakableSpecification)
  }
}
SpeakableSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SpeakableSpecification)
SpeakableSpecificationMixin.Class = SpeakableSpecificationImpl
