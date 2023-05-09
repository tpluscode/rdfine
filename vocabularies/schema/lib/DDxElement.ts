import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface DDxElement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, rdfine.RdfResource<D> {
  diagnosis: Schema.MedicalCondition<D> | undefined;
  distinguishingSign: Schema.MedicalSignOrSymptom<D> | undefined;
}

export function DDxElementMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DDxElement> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DDxElementClass extends MedicalIntangibleMixin(Resource) implements Partial<DDxElement> {
    @rdfine.property.resource()
    diagnosis: Schema.MedicalCondition | undefined;
    @rdfine.property.resource()
    distinguishingSign: Schema.MedicalSignOrSymptom | undefined;
  }
  return DDxElementClass
}

class DDxElementImpl extends DDxElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DDxElement>) {
    super(arg, init)
    this.types.add(schema.DDxElement)
  }

  static readonly __mixins: Mixin[] = [DDxElementMixin, MedicalIntangibleMixin];
}
DDxElementMixin.appliesTo = schema.DDxElement
DDxElementMixin.Class = DDxElementImpl

export const fromPointer = createFactory<DDxElement>([MedicalIntangibleMixin, DDxElementMixin], { types: [schema.DDxElement] });
