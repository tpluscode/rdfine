import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface LearningResource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
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

export function LearningResourceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LearningResource> & RdfResourceCore> & Base {
  @namespace(schema)
  class LearningResourceClass extends CreativeWorkMixin(Resource) implements Partial<LearningResource> {
    @property.literal()
    assesses: string | undefined;
    @property.literal()
    competencyRequired: string | undefined;
    @property({ path: schema.competencyRequired })
    competencyRequiredTerm: RDF.NamedNode | undefined;
    @property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @property.literal()
    educationalLevel: string | undefined;
    @property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @property.literal()
    educationalUse: string | undefined;
    @property.literal()
    learningResourceType: string | undefined;
    @property.literal()
    teaches: string | undefined;
  }
  return LearningResourceClass
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
