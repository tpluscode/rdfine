import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { LifestyleModificationMixin } from './LifestyleModification';

export interface Diet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.LifestyleModification<D>, RdfResource<D> {
  dietFeatures: string | undefined;
  endorsers: Schema.Organization<D> | Schema.Person<D> | undefined;
  expertConsiderations: string | undefined;
  physiologicalBenefits: string | undefined;
  risks: string | undefined;
}

export function DietMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Diet> & RdfResourceCore> & Base {
  @namespace(schema)
  class DietClass extends LifestyleModificationMixin(CreativeWorkMixin(Resource)) implements Partial<Diet> {
    @property.literal()
    dietFeatures: string | undefined;
    @property.resource()
    endorsers: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    expertConsiderations: string | undefined;
    @property.literal()
    physiologicalBenefits: string | undefined;
    @property.literal()
    risks: string | undefined;
  }
  return DietClass
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
