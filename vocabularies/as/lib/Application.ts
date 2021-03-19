import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Application<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function ApplicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Application> & RdfResourceCore> & Base {
  @namespace(as)
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
