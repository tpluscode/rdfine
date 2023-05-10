import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface SpeakableSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

export function SpeakableSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SpeakableSpecification> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SpeakableSpecificationClass extends IntangibleMixin(Resource) implements Partial<SpeakableSpecification> {
    @rdfine.property.literal()
    cssSelector: string | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<SpeakableSpecification>([IntangibleMixin, SpeakableSpecificationMixin], { types: [schema.SpeakableSpecification] });
