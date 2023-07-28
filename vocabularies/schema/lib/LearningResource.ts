import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface LearningResource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  assesses: string | undefined;
  competencyRequired: string | undefined;
  competencyRequiredTerm: RDF.NamedNode | undefined;
  educationalAlignment: Schema.AlignmentObject<D> | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  educationalUse: string | undefined;
  learningResourceType: string | undefined;
  teaches: string | undefined;
}

export function LearningResourceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LearningResource & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LearningResourceClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    assesses: string | undefined;
    @rdfine.property.literal()
    competencyRequired: string | undefined;
    @rdfine.property({ path: schema.competencyRequired })
    competencyRequiredTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @rdfine.property.literal()
    educationalLevel: string | undefined;
    @rdfine.property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    educationalUse: string | undefined;
    @rdfine.property.literal()
    learningResourceType: string | undefined;
    @rdfine.property.literal()
    teaches: string | undefined;
  }
  return LearningResourceClass as any
}

class LearningResourceImpl extends LearningResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LearningResource>) {
    super(arg, init)
    this.types.add(schema.LearningResource)
  }

  static readonly __mixins: Mixin[] = [LearningResourceMixin, CreativeWorkMixin];
}
LearningResourceMixin.appliesTo = schema.LearningResource
LearningResourceMixin.Class = LearningResourceImpl

export const fromPointer = createFactory<LearningResource>([CreativeWorkMixin, LearningResourceMixin], { types: [schema.LearningResource] });
