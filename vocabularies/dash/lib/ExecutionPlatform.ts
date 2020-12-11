import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface ExecutionPlatform<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  includedExecutionPlatform: Dash.ExecutionPlatform<D> | undefined;
}

export function ExecutionPlatformMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ExecutionPlatformClass extends RdfsResourceMixin(Resource) implements ExecutionPlatform {
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
