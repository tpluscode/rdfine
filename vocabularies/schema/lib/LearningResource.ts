import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface LearningResource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  assesses: string | undefined;
  educationalAlignment: Schema.AlignmentObject<D> | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  educationalUse: string | undefined;
  teaches: string | undefined;
}

export function LearningResourceMixin<Base extends Constructor>(Resource: Base): Constructor<LearningResource> & Base {
  @namespace(schema)
  class LearningResourceClass extends CreativeWorkMixin(Resource) implements Partial<LearningResource> {
    @property.literal()
    assesses: string | undefined;
    @property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @property.literal()
    educationalLevel: string | undefined;
    @property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @property.literal()
    educationalUse: string | undefined;
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
