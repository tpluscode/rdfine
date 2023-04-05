import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface ExecutionPlatform<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  includedExecutionPlatform: Dash.ExecutionPlatform<D> | undefined;
}

export function ExecutionPlatformMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExecutionPlatform> & RdfResourceCore> & Base {
  @namespace(dash)
  class ExecutionPlatformClass extends RdfsResourceMixin(Resource) implements Partial<ExecutionPlatform> {
    @property.resource({ as: [ExecutionPlatformMixin] })
    includedExecutionPlatform: Dash.ExecutionPlatform | undefined;
  }
  return ExecutionPlatformClass
}

class ExecutionPlatformImpl extends ExecutionPlatformMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExecutionPlatform>) {
    super(arg, init)
    this.types.add(dash.ExecutionPlatform)
  }

  static readonly __mixins: Mixin[] = [ExecutionPlatformMixin, RdfsResourceMixin];
}
ExecutionPlatformMixin.appliesTo = dash.ExecutionPlatform
ExecutionPlatformMixin.Class = ExecutionPlatformImpl

export const fromPointer = createFactory<ExecutionPlatform>([RdfsResourceMixin, ExecutionPlatformMixin], { types: [dash.ExecutionPlatform] });
