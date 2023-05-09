import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Application<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function ApplicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Application> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ApplicationClass extends ObjectMixin(Resource) implements Partial<Application> {
  }
  return ApplicationClass
}

class ApplicationImpl extends ApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Application>) {
    super(arg, init)
    this.types.add(as.Application)
  }

  static readonly __mixins: Mixin[] = [ApplicationMixin, ObjectMixin];
}
ApplicationMixin.appliesTo = as.Application
ApplicationMixin.Class = ApplicationImpl

export const fromPointer = createFactory<Application>([ObjectMixin, ApplicationMixin], { types: [as.Application] });
