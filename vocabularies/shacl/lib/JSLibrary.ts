import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface JSLibrary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  jsLibraryURL: string | undefined;
}

export function JSLibraryMixin<Base extends Constructor>(Resource: Base): Constructor<JSLibrary> & Base {
  @namespace(sh)
  class JSLibraryClass extends RdfsResourceMixin(Resource) implements JSLibrary {
    @property.literal()
    jsLibraryURL: string | undefined;
  }
  return JSLibraryClass
}

class JSLibraryImpl extends JSLibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSLibrary>) {
    super(arg, init)
    this.types.add(sh.JSLibrary)
  }

  static readonly __mixins: Mixin[] = [JSLibraryMixin, RdfsResourceMixin];
}
JSLibraryMixin.appliesTo = sh.JSLibrary
JSLibraryMixin.Class = JSLibraryImpl
