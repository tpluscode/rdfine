import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface DDxElement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, RdfResource<D> {
  diagnosis: Schema.MedicalCondition<D> | undefined;
  distinguishingSign: Schema.MedicalSignOrSymptom<D> | undefined;
}

export function DDxElementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DDxElement> & RdfResourceCore> & Base {
  @namespace(schema)
  class DDxElementClass extends MedicalIntangibleMixin(Resource) implements Partial<DDxElement> {
    @property.resource()
    diagnosis: Schema.MedicalCondition | undefined;
    @property.resource()
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
