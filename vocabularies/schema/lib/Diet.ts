import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { LifestyleModificationMixin } from './LifestyleModification.js';

export interface Diet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.LifestyleModification<D>, rdfine.RdfResource<D> {
  dietFeatures: string | undefined;
  endorsers: Schema.Organization<D> | Schema.Person<D> | undefined;
  expertConsiderations: string | undefined;
  physiologicalBenefits: string | undefined;
  risks: string | undefined;
}

export function DietMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Diet & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DietClass extends LifestyleModificationMixin(CreativeWorkMixin(Resource)) {
    @rdfine.property.literal()
    dietFeatures: string | undefined;
    @rdfine.property.resource()
    endorsers: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.literal()
    expertConsiderations: string | undefined;
    @rdfine.property.literal()
    physiologicalBenefits: string | undefined;
    @rdfine.property.literal()
    risks: string | undefined;
  }
  return DietClass as any
}

class DietImpl extends DietMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Diet>) {
    super(arg, init)
    this.types.add(schema.Diet)
  }

  static readonly __mixins: Mixin[] = [DietMixin, CreativeWorkMixin, LifestyleModificationMixin];
}
DietMixin.appliesTo = schema.Diet
DietMixin.Class = DietImpl

export const fromPointer = createFactory<Diet>([LifestyleModificationMixin, CreativeWorkMixin, DietMixin], { types: [schema.Diet] });
