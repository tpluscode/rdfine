import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { SoftwareAgentMixin } from './SoftwareAgent.js';

export interface DirectQueryService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.SoftwareAgent<D>, RdfResource<D> {
}

export function DirectQueryServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DirectQueryService> & RdfResourceCore> & Base {
  @namespace(prov)
  class DirectQueryServiceClass extends SoftwareAgentMixin(Resource) implements Partial<DirectQueryService> {
  }
  return DirectQueryServiceClass
}

class DirectQueryServiceImpl extends DirectQueryServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DirectQueryService>) {
    super(arg, init)
    this.types.add(prov.DirectQueryService)
  }

  static readonly __mixins: Mixin[] = [DirectQueryServiceMixin, SoftwareAgentMixin];
}
DirectQueryServiceMixin.appliesTo = prov.DirectQueryService
DirectQueryServiceMixin.Class = DirectQueryServiceImpl

export const fromPointer = createFactory<DirectQueryService>([SoftwareAgentMixin, DirectQueryServiceMixin], { types: [prov.DirectQueryService] });
