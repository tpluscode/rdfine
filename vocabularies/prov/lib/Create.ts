import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ContributeMixin } from './Contribute.js';

export interface Create<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Contribute<D>, RdfResource<D> {
}

export function CreateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Create> & RdfResourceCore> & Base {
  @namespace(prov)
  class CreateClass extends ContributeMixin(Resource) implements Partial<Create> {
  }
  return CreateClass
}

class CreateImpl extends CreateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Create>) {
    super(arg, init)
    this.types.add(prov.Create)
  }

  static readonly __mixins: Mixin[] = [CreateMixin, ContributeMixin];
}
CreateMixin.appliesTo = prov.Create
CreateMixin.Class = CreateImpl

export const fromPointer = createFactory<Create>([ContributeMixin, CreateMixin], { types: [prov.Create] });
