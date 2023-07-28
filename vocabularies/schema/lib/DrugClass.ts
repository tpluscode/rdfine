import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface DrugClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  drug: Schema.Drug<D> | undefined;
}

export function DrugClassMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DrugClass & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DrugClassClass extends MedicalEntityMixin(Resource) {
    @rdfine.property.resource()
    drug: Schema.Drug | undefined;
  }
  return DrugClassClass as any
}

class DrugClassImpl extends DrugClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrugClass>) {
    super(arg, init)
    this.types.add(schema.DrugClass)
  }

  static readonly __mixins: Mixin[] = [DrugClassMixin, MedicalEntityMixin];
}
DrugClassMixin.appliesTo = schema.DrugClass
DrugClassMixin.Class = DrugClassImpl

export const fromPointer = createFactory<DrugClass>([MedicalEntityMixin, DrugClassMixin], { types: [schema.DrugClass] });
