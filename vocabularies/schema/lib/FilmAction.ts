import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreateActionMixin } from './CreateAction';

export interface FilmAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
}

export function FilmActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FilmActionClass extends CreateActionMixin(Resource) implements FilmAction {
  }
  return FilmActionClass
}

class FilmActionImpl extends FilmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FilmAction>) {
    super(arg, init)
    this.types.add(schema.FilmAction)
  }

  static readonly __mixins: Mixin[] = [FilmActionMixin, CreateActionMixin];
}
FilmActionMixin.appliesTo = schema.FilmAction
FilmActionMixin.Class = FilmActionImpl
