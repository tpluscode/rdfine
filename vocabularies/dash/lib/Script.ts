import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Script<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  js: string | undefined;
}

export function ScriptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Script & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ScriptClass extends RdfsResourceMixin(Resource) {
    @rdfine.property.literal()
    js: string | undefined;
  }
  return ScriptClass as any
}

class ScriptImpl extends ScriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Script>) {
    super(arg, init)
    this.types.add(dash.Script)
  }

  static readonly __mixins: Mixin[] = [ScriptMixin, RdfsResourceMixin];
}
ScriptMixin.appliesTo = dash.Script
ScriptMixin.Class = ScriptImpl

export const fromPointer = createFactory<Script>([RdfsResourceMixin, ScriptMixin], { types: [dash.Script] });
