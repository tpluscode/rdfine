import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Script<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  js: string | undefined;
}

export function ScriptMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ScriptClass extends RdfsResourceMixin(Resource) implements Script {
    @property.literal()
    js: string | undefined;
  }
  return ScriptClass
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
