import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface SpeakableSpecification<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

export function SpeakableSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SpeakableSpecificationClass extends IntangibleMixin(Resource) implements SpeakableSpecification {
    @property.literal()
    cssSelector: string | undefined;
    @property.literal()
    xpath: string | undefined;
  }
  return SpeakableSpecificationClass
}

class SpeakableSpecificationImpl extends SpeakableSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpeakableSpecification>) {
    super(arg, init)
    this.types.add(schema.SpeakableSpecification)
  }

  static readonly __mixins: Mixin[] = [SpeakableSpecificationMixin, IntangibleMixin];
}
SpeakableSpecificationMixin.appliesTo = schema.SpeakableSpecification
SpeakableSpecificationMixin.Class = SpeakableSpecificationImpl
